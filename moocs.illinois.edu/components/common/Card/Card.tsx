import { Card as UICard } from "semantic-ui-react";

import ICardProps from "./ICardProps";

const Card = ({children, ...rest}: ICardProps) => {
    return <UICard {...rest}>{children}</UICard>
}

export default Card;