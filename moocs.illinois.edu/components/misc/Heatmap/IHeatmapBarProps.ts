import { SVGProps } from "react";

/** Props to pass to the heat map bar. */
export interface IHeatMapping {
  /** The interval difficulty. */
  heat: number;
  /** The number of seconds into the video that the segment starts. */
  interval: number;
}

export default interface IHeatmapBarProps extends SVGProps<SVGSVGElement> {
  /** The array of heat values and their intervals. */
  heats: IHeatMapping[];
}
