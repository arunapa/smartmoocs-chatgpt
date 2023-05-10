import React, { useEffect, useReducer, useState } from "react";
import Link from "next/link";
import { withRouter, NextRouter } from "next/router";
import { connect, ConnectedProps } from "react-redux";
import { Accordion, AccordionTitleProps, Icon } from "semantic-ui-react";

import { Divider, Header, Layout } from "../../../../components";
import { AppState, ILecture } from "../../../../store";
import { range, sortLectureByLesson } from "../../../../util";
import styles from "../../../../styles/Lectures.module.scss";

interface IProps {
  router: NextRouter;
}

const Lectures = ({ course, lectures, router }: IProps & ReduxProps) => {
  const [lectureRows, setLectureRows] = useState<ILecture[][]>([]);

  // for open module accordians
  type State = { activeCourses: number[] };
  type Action = { type: "toggleModule", index: number } | { type: "init" };
  
  /**
   * Reducer for managing the active courses in the accordian group.
   * @param state The active courses in the accordian group.
   * @param action The actions to take on the active courses.
   * @returns The newly-modified active courses state.
   */
  const reducer = (state: State, action: Action): State => {
    let newActiveCourses = [...state.activeCourses];
    switch (action.type) {
      case "toggleModule":
        if (action.index === -1) return state;
        newActiveCourses.indexOf(action.index) === -1
          ? newActiveCourses.push(action.index)
          : newActiveCourses = newActiveCourses.filter(index => index !== action.index);
        break;
      case "init":
        newActiveCourses = range(0, (lectures?.length ?? 0) - 1);
        break;
    }
    return { activeCourses: newActiveCourses };
  }

  const [{ activeCourses }, dispatch] = useReducer(reducer, { activeCourses: []});

  useEffect(() => {
    // set active courses to all
    dispatch({ type: "init" });

    // determine lectures per accordion
    let lectureRowsCopy: ILecture[][] = [];
    const lecturesCopy = sortLectureByLesson(lectures);
  
    if (lecturesCopy) {
      for (const lecture of lecturesCopy) {
        const week = parseInt(lecture.slug.split("-")[0]);
        if (!lectureRowsCopy[week]) lectureRowsCopy[week] = [];
        lectureRowsCopy[week].push(lecture);
      }
      setLectureRows(lectureRowsCopy);
    }
  }, [lectures]);

  /**
   * Toggles whether an accordion is open.
   * @param e The mouse click event.
   * @param titleProps The accordion title props.
   */
  const onAccordionClick = (e: React.MouseEvent, titleProps: AccordionTitleProps) => {
    let { index } = titleProps;
    index = typeof index === "number" ? index : parseInt(index ?? "-1");
    dispatch({ type: "toggleModule", index: index });
  }

  const onTitleKeyPress = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter") {
      dispatch({ type: "toggleModule", index: index });
    }
  }

  const onModuleKeyPress = (e: React.KeyboardEvent, lecture: ILecture) => {
    if (e.key === "Enter") {
      router.push(`/courses/${course?.slug ?? ""}/lectures/${lecture.slug}`);
    }
  }

  return (
    <Layout
      className={styles.content}
      title="Lectures"
      breadcrumbs={[
        {
          href: "/courses",
          text: "Courses"
        },
        {
          href: "/courses",
          text: course?.name ?? ""
        },
        {
          text: "Lectures",
        }
      ]}
    >
      <Header as="h1">Lectures</Header>
      <p>Click on one of the lectures below to continue</p>
      <Divider className={styles.divider} />
      {lectureRows.map((lectureRow, index) => (
        <Accordion
          styled
          fluid
          className={styles.accordion}
        >
          <Accordion.Title
            index={index}
            active={activeCourses.includes(index)}
            onClick={onAccordionClick}
            className={styles.title}
            icon="dropdown icon"
            tabIndex={0}
            onKeyDown={(e: any) => onTitleKeyPress(e, index)}
          >
            <Icon name="dropdown" />{`Week ${index}`}
          </Accordion.Title>
          {lectureRow.map(lecture => (
              <Link href={`/courses/${course?.slug ?? ""}/lectures/${lecture.slug}`}>
                <Accordion.Content
                  active={activeCourses.includes(index)}
                  className={styles.accContent}
                  tabIndex={0}
                  onKeyPress={(e: any) => onModuleKeyPress(e, lecture)}
                >
                    <Icon name="video play" />{`${lecture.name} - ${lecture.description}`}
                </Accordion.Content>
              </Link>
          ))}
        </Accordion>
      ))}
    </Layout>
  );
};

/**
 * Map state to component props.
 * @param state Application state.
 * @param ownProps Custom component props.
 * @returns Custom state mapping for Redux.
 */
const mapStateToProps = (state: AppState, ownProps: IProps) => {
  const { courseSlug } = ownProps.router.query;
  let parsedCourseSlug = Array.isArray(courseSlug)
    ? courseSlug.join(" ")
    : courseSlug ?? "";
  const semester = state.dt.semesters.find((semester) => {
    return (
      semester.courses?.find((sCourse) => sCourse.slug === parsedCourseSlug) !==
      undefined
    );
  });

  const course = semester?.courses?.find(
    (course) => course.slug === parsedCourseSlug
  );

  return {
    course: course,
    lectures: course?.lectures,
  };
};

/** Component connector. */
const connector = connect(mapStateToProps);
/** Type of component connector. */
type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(Lectures));
