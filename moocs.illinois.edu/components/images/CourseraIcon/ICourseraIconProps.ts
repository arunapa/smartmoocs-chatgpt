import { PropsWithChildren } from "react";

export interface ICourseraIconProps {
    /** URL this icon links to. */
    href: string;
    /** URL to the image icon. */
    iconHref?: string;
    /** Additional class names for the icon wrapper. */
    className?: string;
}

type CourseraIconProps = PropsWithChildren<ICourseraIconProps>;
export default CourseraIconProps;
