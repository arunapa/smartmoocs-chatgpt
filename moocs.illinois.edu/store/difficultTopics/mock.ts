import computedRetrieval from "./textretrieval_master_dict_no_zeros";
import computedAnalytics from "./textanalytics_master_dict_no_zeros";

import { IBucket, ISemester, ITopicProbability, Session, Term } from "./types";
import { getPartsFromVideo } from "../../util";

export interface ComputedType {
    course: string;
    semester: string;
    name: string;
    description: string;
    session?: string;
    term?: string;
    year: number;
    lectures: {[key: string]: any};
    topics: {[key: string]: any};
}

export const generateMockState = (): ISemester[] => {
    const computedCourses = [computedRetrieval, computedAnalytics];
    let semesters: ISemester[] = [];

    semesters.push({
        id: new Date().getTime(),
        term: computedCourses[0].semester,
        session: Session.C,
        start_date: String(computedCourses[0].year),
        end_date: String(computedCourses[0].year),
        courses: []
    });

    let semester = semesters[semesters.length - 1];
    for (const computed of computedCourses) {

        if (semester.courses) {
            semester.courses.push({
                id: 0,
                name: computed.name,
                slug: computed.course,
                description: computed.description ?? "",
                topics: [],
                lectures: []
            })

            // add the topics
            let idTracker = 0;
            for (const topicId in computed.topics) {
                const topic = computed.topics[topicId];
                semester.courses[semester.courses.length - 1].topics.push({
                    id: topic.id,
                    name: topic.name,
                    description: topic.description,
                    difficulty: topic.difficulty
                });
                idTracker++;
            }

            // add lectures with buckets
            idTracker = 0;
            for (const [key, value] of Object.entries(computed.lectures)) {
                const extraKey: any = key
                const lecture = value;

                // compute buckets
                let buckets: IBucket[] = [];
                for (const interval in lecture.buckets) {
                    const bucket = lecture.buckets[interval];

                    // get topic probabilities
                    let probabilities: ITopicProbability[] = [];

                    for (const prob of bucket.topics) {
                        probabilities.push({
                            topicId: prob.id,
                            probability: prob.coverageProbability
                        })
                    }

                    buckets.push({
                        id: idTracker,
                        interval: interval,
                        heat: bucket.heat,
                        topicProbabilities: probabilities
                    });
                }

                // store into lectures
                const parts = getPartsFromVideo(lecture.videoUrl);
                semester.courses[semester.courses.length - 1].lectures?.push({
                    id: idTracker,
                    active: true,
                    name: parts?.name ?? key,
                    slug: key,
                    description: parts?.description ?? "",
                    videoUrl: lecture.videoUrl ?? "",
                    buckets: buckets
                });
            }
        }
    }

    return semesters;
}