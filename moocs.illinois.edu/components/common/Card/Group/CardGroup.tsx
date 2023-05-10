import { Card as UICard } from "semantic-ui-react";

import ICardGroupProps from "./ICardGroupProps";

const CardGroup = ({children, ...rest}: ICardGroupProps) => {
    return <UICard.Group {...rest}>{children}</UICard.Group>
}

export default CardGroup;