import React, { PropsWithChildren } from "react";
import { ILayoutBreadcrumbProps } from "../";

export interface IOpenGraphVideoProps {
    /** A URL to a video file that complements this object. */
    ogVideo?: string;
    /** The video file type. */
    ogVideoType?: string;
    /** The video width. */
    ogVideoWidth?: string;
    /** The video height. */
    ogVideoHeight?: string;
    /** A secure URL to the video. */
    ogVideoSecureUrl?: string;
}

/**
 * Open Graph specification. For more information check out their
 * [official documentation](https://ogp.me/).
 */
export interface IOpenGraphProps extends IOpenGraphVideoProps {
    /** The title of your object as it should appear within the graph. */
    ogTitle?: string;
    /**
     * The [type](https://ogp.me/#types) of your object, e.g., "video.movie".
     * Depending on the type you specify, other properties may also be required.
     */
    ogType?: string;
    /** An image URL which should represent your object within the graph. */
    ogImage?: string;
    /** The canonical URL of your object that will be used as its permanent ID in the graph. */
    ogUrl?: string;
    /** A URL to an audio file to accompany this object. */
    ogAudio?: string;
    /** A one to two sentence description of your object. */
    ogDescription?: string;
    /** The word that appears before this object's title in a sentence. */
    ogDeterminer?: string;
    /** The locale these tags are marked up in. Of the format `language_TERRITORY`. Default is `en_US`. */
    ogLocale?: string;
    /** An [array](https://ogp.me/#array) of other locales this page is available in. */
    ogLocaleAlternate?: string;
    /** If your object is part of a larger web site, the name which should be displayed for the overall site. */
    ogSiteName?: string;
}

/** Open Graph default values. */
export const ogDefaults: IOpenGraphProps = {
    ogTitle: "Smart MOOCs",
    ogImage: "//marketing.illinois.edu/images/brand/design/logo/white-wordmark-on-blue.png",
    ogDescription: `A project dedicated to enhancing the online learning experience 
    by providing tools and resources for instructors and students of Massive Open Online Courses. 
    The student experience is enhanced by providing a visualization of the relative difficulty 
    of each part of the lecture.`,

}

export interface ILayoutProps {
    /** The page title. */
    title?: string;
    /** Whether the content container takes the full length of the screen. */
    fluid?: boolean;
    /** Additional class names for the content section. */
    className?: string;
    /** A string or component that will reside in the upper-right corner of the layout. */
    externalGuide?: string | React.ReactNode;
    /** Breadcrumb items to display at the top of the layout. */
    breadcrumbs?: ILayoutBreadcrumbProps[];
    /** Whether the breadcrumbs container is fluid. */
    breadcrumbsFluid?: boolean;
    /** Additional class names to give to the breadcrumbs container. */
    breadcrumbsClassName?: string;
    /**
     * Open Graph specification. For more information check out their
     * [official documentation](https://ogp.me/).
     */
    openGraph?: IOpenGraphProps;
}

export type LayoutProps = PropsWithChildren<ILayoutProps>;