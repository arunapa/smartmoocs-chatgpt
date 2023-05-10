import React, { PropsWithChildren } from "react";
import { Image } from "semantic-ui-react";

import { PropsWithClassName } from "../../../util";

/** `Tile` component props. */
interface ITileProps {
    /** The title to show on the card. */
    title: string | React.ReactNode;
    /** Text just below the title. */
    subtitle?: string | React.ReactNode;
    /** A brief description. */
    description?: string | React.ReactNode;
    /** Additional content displayed at the bottom of the card. */
    extraContent?: string | React.ReactNode;
    /** A border color. If not specified, the standard border is used. */
    borderColor?: string;
    /** A card image (if applicable). */
    imageUrl?: string;
    /** URL if the card is linkable. */
    href?: string;
}

/** Props for a linkable tile. */
interface ILinkableTileProps {
    /** The URL this tile links to. */
    href: string;
}

export type LinkableTileProps = PropsWithChildren<ILinkableTileProps>;
export type TileProps = PropsWithClassName<ITileProps>;