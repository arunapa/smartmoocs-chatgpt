import { NextRouter } from "next/router";

export interface ILayoutBreadcrumbProps {
    /** The link of the breadcrumb. */
    href?: string;
    /** The text that displays. */
    text?: string;
}

export interface ILayoutBreadcrumbsProps {
    /** A list of links and their texts if active. */
    breadcrumbs?: ILayoutBreadcrumbProps[];
    /** Additional class names. */
    className?: string;
    /** NextJS Router. */
    router: NextRouter;
}

export type LayoutBreadcrumbsProps = ILayoutBreadcrumbsProps;