import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import {
  Divider,
  Grid,
  GridRow,
  GridColumn,
  Header,
} from "../../components/common";
import { CourseTile } from "../../components/cards";
import { Layout } from "../../components";
import { AppState, ICourse } from "../../store";
import styles from "../../styles/StuDashboard.module.scss";

interface IProps extends RedxuxProps {}

const Courses = ({ courses }: IProps) => {
  const COURSES_PER_ROW = 3;

  const [courseRows, setCourseRows] = useState<ICourse[][]>([]);

  useEffect(() => {
    if (courses) {
      const numOfRows = Math.ceil(courses.length / COURSES_PER_ROW);

      let paginatedCourses: ICourse[][] = [];
      for (let i = 0; i < numOfRows; i++) {
        const startIndex = i * COURSES_PER_ROW;
        const inBounds = startIndex + COURSES_PER_ROW < courses.length;
        const endIndex = inBounds
          ? startIndex + COURSES_PER_ROW
          : courses.length;
        paginatedCourses.push(
          courses.slice(
            startIndex,
            endIndex === startIndex ? undefined : endIndex
          )
        );
      }
      setCourseRows(paginatedCourses);
    }
  }, [courses]);

  return (
    <Layout className={styles.content} title="Courses">
      {/* <div className={styles.homepage} /> */}
      <Header as="h1">Courses</Header>
      <p>Welcome Dukes of MOOCs!</p>
      <Divider className={styles.divider} />
      <Grid columns={COURSES_PER_ROW} centered stackable>
        {courseRows.map((coursesInRow, index) => (
          <GridRow key={index}>
            {coursesInRow.map((course, index) => (
              <GridColumn
                key={`${course.slug}-column-${index}`}
                className={styles.courseColumn}
              >
                <CourseTile
                  href={`/courses/${course.slug}/lectures`}
                  title={course.name}
                  subtitle={course.description}
                />
              </GridColumn>
            ))}
          </GridRow>
        ))}
      </Grid>
    </Layout>
  );
};

/**
 * Map state to component props.
 * @param state Application state.
 * @param ownProps Custom component props.
 * @returns Custom state mapping for Redux.
 */
const mapStateToProps = (state: AppState) => ({
  courses: state.dt.semesters[0].courses,
});

/** Component connector. */
const connector = connect(mapStateToProps);
/** Type of component connector. */
type RedxuxProps = ConnectedProps<typeof connector>;

export default connector(Courses);
