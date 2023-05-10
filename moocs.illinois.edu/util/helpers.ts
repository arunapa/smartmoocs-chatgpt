import { ILecture, TopicDescription } from "../store";

/**
 * Converts an array of class name strings into a string appropriate as a class name.
 * Undefined values can be passed for dynamically removing optional prop class names
 * from the class name.
 * @param classes An array of classes. This can include undefined values.
 * @returns A class name-formatted string.
 */
export const csx = (...classes: Array<string | undefined>): string => {
  return classes.filter((c) => c !== undefined && c !== "").join(" ");
};

/**
 * Generates a topic description using a topic object with keywords and their
 * normalized values.
 * @param description The topic description broken down into keywords and their normalized
 * values.
 * @returns A string concating all keywords in order of descending value.
 */
export const generateTopicDescription = (
  description: TopicDescription
): string => {
  let descr: string = "";
  for (const [key] of Object.entries(description).sort(([, a], [, b]) =>
    a && b ? a - b : 0
  )) {
    descr += `${descr === "" ? "" : " "}${key}`;
  }
  return descr;
};

interface IVideoUrlParts {
  name: string;
  description: string;
}

/**
 * Generates a name and description from a preformatted video.
 * @param videoUrl The full video URL.
 * @returns The name and description based on the video.
 */
export const getPartsFromVideo = (
  videoUrl?: string
): IVideoUrlParts | undefined => {
  if (videoUrl) {
    let splitUrl = videoUrl
      .split("/")
      .map((value) => value.replace(/%26/g, "&"));
    const delimitedName = splitUrl[splitUrl.length - 1].split("+");
    const startsWithLesson = delimitedName[0] === "Lesson";

    return {
      name: startsWithLesson
        ? delimitedName.slice(0, 2).join(" ")
        : `Lesson ${delimitedName[0]}`,
      description: delimitedName
        .slice(startsWithLesson ? 2 : 1)
        .join(" ")
        .replace(".mp4", ""),
    };
  }
  return;
};

/**
 * Converts a string interval into seconds. An interval should be in the format
 * `HH:MM:SS:MMMMMM`.
 * @example ```
 *    convertIntervalToSeconds();  // returns
 * ```
 * @param interval
 */
export const convertIntervalToSeconds = (interval: string): number => {
  const [hours, minutes, seconds] = interval.split(":").map((i) => parseInt(i));
  return hours * 3600 + minutes * 60 + seconds;
};

export const secondsToHms = (d: number) => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  return `${h < 10 ? 0 : ""}${h}:${m < 10 ? 0 : ""}${m}:${s < 10 ? 0 : ""}${s}`
}

/**
 * Sorts an array of lectures by their lesson number.
 * @param lectures The array of lectures to sort.
 * @returns A sorted copy of the lectures array. If undefined, it returned undefined.
 */
export const sortLectureByLesson = (lectures?: ILecture[]): ILecture[] | undefined => {
  return !lectures ? lectures : [...lectures].sort((l1, l2) => {
    if (l1 === l2) return 0;
    // slug is split by "-"
    const l1SlugParts = l1.slug.split("-");
    const l2SlugParts = l2.slug.split("-");
    if (l1SlugParts[0] > l2SlugParts[0]) return 1;
    if (l1SlugParts[0] < l2SlugParts[0]) return -1;
    return parseInt(l1SlugParts[1]) > parseInt(l2SlugParts[1]) ? 1 : (
      parseInt(l1SlugParts[1]) < parseInt(l2SlugParts[1]) ? -1 : 0
    )
  });
}

/**
 * The javascript-equivalent of Python's `range()` function. This works both incrementally
 * and decrementally. It will return an empty array if the `stop` is less than `start` and
 * the `step` value is positive.
 * @example ```
 *  range(4);       // returns [0, 1, 2, 3]
 *  range(3,6);     // returns [3, 4, 5]
 *  range(0,10,2)   // returns [0, 2, 4, 6, 8]
 *  range(10,0,-1)  // returns [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 *  range(8,2,-2)   // returns [8, 6, 4]
 *  range(8,2)      // returns []
 * ```
 * @param start The starting value.
 * @param stop The end value.
 * @param step The increment to step by. Default is 1.
 * @returns An array of numbers within the inclusive range.
 */
export const range = (start: number, stop?: number, step: number = 1) => {
  if (stop === undefined) {
      stop = start;
      start = 0;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
  }

  return result;
};
