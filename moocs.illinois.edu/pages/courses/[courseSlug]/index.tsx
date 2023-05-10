import { withRouter, NextRouter } from "next/router";
import { connect, ConnectedProps } from "react-redux";

import { AppState } from "../../../store";

interface WithRouterProps {
  router: NextRouter;
}

interface IProps extends WithRouterProps {}

const Course = ({ course }: IProps & RedxuxProps) => {
  return <p>Course {course?.name}</p>;
};

/**
 * Map state to component props.
 * @param state Application state.
 * @param ownProps Custom component props.
 * @returns Custom state mapping for Redux.
 */
const mapStateToProps = (state: AppState, ownProps: IProps) => {
  const { courseSlug } = ownProps.router.query;
  let parsedCourse = Array.isArray(courseSlug) ? courseSlug.join(" ") : (courseSlug ?? "");
  const semester = state.dt.semesters.find((semester) => {
    return semester.courses?.find((sCourse) => sCourse.slug === parsedCourse) !== undefined;
  });

  return {
      course: semester?.courses?.find(course => course.slug === parsedCourse)
  }
};

/** Component connector. */
const connector = connect(mapStateToProps);
/** Type of component connector. */
type RedxuxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(Course));
