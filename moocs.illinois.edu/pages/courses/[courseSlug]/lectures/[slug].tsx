import React, { useEffect, useRef, useState } from "react";
import { withRouter, NextRouter } from "next/router";
import { connect, ConnectedProps } from "react-redux";
import {
  Button,
  Grid,
  Header,
  Menu,
  Popup,
  Ref,
  Segment,
  Sidebar
} from "semantic-ui-react";
import ReactPlayer from "react-player";

import { AppState, ITopic } from "../../../../store";
import styles from "../../../../styles/VideoDisplay.module.scss";
import {
  CourseraIcon,
  HeatmapBar,
  IHeatMapping,
  Layout
} from "../../../../components";
import {
  generateTopicDescription,
  convertIntervalToSeconds,
  secondsToHms,
} from "../../../../util";

interface IProps {
  router: NextRouter;
}

const Lecture = ({ course, lecture, topics }: IProps & ReduxProps) => {
  const [bucketTopics, setBucketTopics] = useState<ITopic[]>([]);
  const [rankings, setRankings] = useState<any>([]);
  const [heatMappings, setHeatMappings] = useState<IHeatMapping[]>([]);
  const [topicsVisible, setTopicsVisible] = useState<boolean | undefined>(true);

  const player = useRef<ReactPlayer>(null);
  const blankRef = useRef<HTMLDivElement>(null);

  // populates the buckets and parses the most popular topic of each
  useEffect(() => {
    // get topics per bucket
    if (lecture?.buckets && topics) {
      let topicIds: ITopic[] = [];
      for (const bucket of lecture?.buckets) {
        let probabilities = [...bucket.topicProbabilities];
        probabilities.sort((t1, t2) => t1.probability - t2.probability);
        const foundTopic = topics?.find(
          (topic) => topic.id && topic.id === probabilities[0].topicId
        );
        if (foundTopic) topicIds.push(foundTopic);
      }
      setBucketTopics(topicIds);

      // map the heat mappings to their corresponding time stamp
      let mappings: IHeatMapping[] = [];
      for (const bucket of lecture.buckets) {
        mappings.push({
          heat: bucket.heat,
          interval: convertIntervalToSeconds(bucket.interval),
        });
      }
      mappings.sort((m1, m2) => m1.interval - m2.interval); // sort by time
      setHeatMappings(mappings);

      // then map the new topic rankings dropdown
      let options = [];
      for (const topic in topicIds) {
        options.push({
          key: `topic-option-${topic}`,
          value: parseInt(topic) + 1,
          text: parseInt(topic) + 1,
        });
      }
      setRankings(options);
    }
  }, [lecture, topics]);

  /**
   * Goes to the number of seconds in the video.
   * @param seconds The number of seconds in the video to target.
   */
  const seek = (seconds: number) => {
    if (player.current) {
      player.current.seekTo(seconds);
    }
  };

  /**
   * Handles a key press on the left-hand menu, seeking the interval of the topic.
   * @param e The keyboard event.
   * @param index The index (or week) of the event module.
   */
  const onRowKeyPress = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      seek(heatMappings[index].interval);
    }
  };

  /**
   * Navigates to the timestamp of the corresponding topic.
   * @param index The row clicked.
   */
  const onRowKeyClick = (index: number) => {
    seek(heatMappings[index].interval)
  }
  
  let summaries = require('../../../../topic_summaries/textretrieval.json')
  let topicSummaryArr = Object.entries(summaries.summaries[lecture.name])

  let chatgpt_topics = require('../../../../topic_summaries/top_5_topics_from_chatgpt.json')
  let chatgpt_topics_arr = Object.entries(chatgpt_topics[lecture.name])

  return (
    <Layout
      className={styles.content}
      title={lecture?.name}
      fluid
      externalGuide={lecture?.courseraUrl && <CourseraIcon href={lecture?.courseraUrl} />}
      openGraph={{
        ogDescription: lecture && `${lecture?.name} - ${lecture.description}`,
        ogType: "video.movie",
        ogVideo: lecture?.videoUrl,
        ogVideoType: "video/mp4",
      }}
      breadcrumbsFluid
      breadcrumbsClassName={styles.breadcrumbs}
      breadcrumbs={[
        {
          href: "/courses",
          text: "Courses",
        },
        {
          href: `/courses`,
          text: course?.name ?? "",
        },
        {
          href: `/courses/${course?.slug ?? ""}/lectures/`,
          text: "Lectures",
        },
        {
          text: lecture?.name ?? "Lecture",
        },
      ]}
    >
      <Ref innerRef={blankRef}><div /></Ref>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          vertical
          animation="scale down"
          direction="left"
          icon="labeled"
          target={blankRef}
          visible={topicsVisible}
          onHide={() => setTopicsVisible(false)}
          width="wide"
          className={styles.sidebar}
        >
          <Header as="h3">Summary view</Header>
          {topicSummaryArr.map(([key, val], index) => (
            <Menu.Item className={styles.topicRow}>
              <Grid columns={2}>
                <Grid.Row
                  tabIndex={0}
                  onClick={() => onRowKeyClick(index)}
                  onKeyPress={(e: any) => onRowKeyPress(e, index)}
                  className={styles.topicRow}
                >
                  <Grid.Column
                    width={5}
                    className={styles.topicInterval}
                    key={key}
                  >
                    {key}
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <Popup content={val} position={'left center'} trigger={<div>{val}</div>} /> 
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Menu.Item>
          ))}
        </Sidebar>

        <Sidebar.Pusher
          className={topicsVisible ? styles.pusherVisible : styles.pusher}
        >
          <Segment basic>
            <h1 className={styles.lectureTitle}>
              {lecture?.name} {lecture?.description}
            </h1>
            <ReactPlayer
              className={styles.videoFrame}
              ref={player}
              url={lecture?.videoUrl}
              controls
              width="100%"
              height="inherit"
            />
            <div className={styles.heatmapWrapper}>
              <HeatmapBar
                heats={heatMappings}
                height="2.3em"
                className={styles.heatmap}
              />
              <p className={styles.label}>
                Visualization of relative topic difficulty at each lecture
                timestamp
              </p>

              <h3>
                Keywords: <></>
                {chatgpt_topics_arr.map(([key, val], idx) => (
                    <Button>
                        {val}
                    </Button>
                ))}
              </h3>
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
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
  const { courseSlug, slug } = ownProps.router.query;
  let parsedCourseSlug = Array.isArray(courseSlug)
    ? courseSlug.join(" ")
    : courseSlug ?? "";
  let parsedLectureSlug = Array.isArray(slug) ? slug.join(" ") : slug ?? "";
  const semester = state.dt.semesters.find((semester) => {
    return (
      semester.courses?.find((sCourse) => sCourse.slug === parsedCourseSlug) !==
      undefined
    );
  });

  const course = semester?.courses?.find((course) => {
    return (
      course.lectures?.find((lecture) => {
        return lecture.slug === parsedLectureSlug;
      }) !== undefined
    );
  });

  const lecture = course?.lectures?.find(
    (lecture) => lecture.slug === parsedLectureSlug
  );
  const topics = course?.topics;

  return {
    course: course,
    lecture: lecture,
    topics: topics,
  };
};

/** Component connector. */
const connector = connect(mapStateToProps);
/** Type of component connector. */
type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(Lecture));
