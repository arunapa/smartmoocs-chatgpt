import React, { useRef } from "react";
import Link from "next/link";

import { Card } from "semantic-ui-react";
import { csx } from "../../../util";
import { TileProps, LinkableTileProps } from "./ITileProps";

import styles from "./Tile.module.scss";
import router from "next/router";

/**
 * A tile component with a Next link to it, making the whole card clickable.
 */
const LinkableTile = ({ href, children }: LinkableTileProps) => {
  const ref = useRef(null);
  return (
    <Link href={href} passHref>
      {children}
    </Link>
  );
};

/**
 * A tile component for displaying course and lecture info.
 */
const Tile = ({
  title,
  subtitle,
  description,
  extraContent,
  className,
  href,
  imageUrl,
}: TileProps) => {

  /**
   * Handles when the "Enter" key is pressed on a card.
   * @param e The keyboard event.
   */
  const onCardKeyPress = (e: React.KeyboardEvent) => {
    if (href && e.key === "Enter") {
      router.push(href);
    }
  }

  const card = (
    <Card
      className={csx(className, styles.tile)}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${title} image`}
          width="100%"
          className="header-img"
        />
      )}
      <Card.Content className={styles.cardContent}>
        <Card.Header
          className={styles.header}
          tabIndex={!!href ? 0 : -1}
          onKeyPress={onCardKeyPress}
        >
          {title}
        </Card.Header>
        <Card.Meta className={styles.meta}>{subtitle}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      {extraContent && <Card.Content extra>
        {extraContent}
      </Card.Content>}
    </Card>
  );

  return href === undefined ? (
    card
  ) : (
    <LinkableTile href={href}>{card}</LinkableTile>
  );
};

export default Tile;
