import { Card as UICard } from "semantic-ui-react";

import ICardHeaderProps from "./ICardHeaderProps";

const CardHeader = ({children, ...rest}: ICardHeaderProps) => {
    return <UICard.Header {...rest}>{children}</UICard.Header>
}

export default CardHeader;