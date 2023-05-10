export enum Term {
    fall = "Fall",
    spring = "Spring",
    summer = "Summer",
    winter = "Winter"
}

export enum Session {
    A = "A",
    B = "B",
    C = "C"
}

interface IDModel {
    id?: number;
}

export interface ITopicProbability extends IDModel {
    topicId: number;
    probability: number;
}

export interface IBucket extends IDModel {
    interval: string;
    heat: number;
    topicProbabilities: ITopicProbability[];
}

export interface ILecture extends IDModel {
    name: string;
    slug: string;
    description: string;
    videoUrl: string;
    courseraUrl?: string;
    buckets: IBucket[];
    active?: boolean;
}

export type TopicDescription = {[key: string]: number | undefined};

export interface ITopic extends IDModel {
    name: string;
    description: TopicDescription;
    difficulty: number;
}

export interface ICourse extends IDModel {
    name: string;
    slug: string;
    description: string;
    topics: ITopic[];
    lectures?: ILecture[];
    active?: boolean;
}

export interface ISemester extends IDModel {
    term: Term | string;
    session: Session;
    start_date: string;
    end_date: string;
    courses?: ICourse[];
}
