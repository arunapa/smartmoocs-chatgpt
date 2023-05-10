import { Card as UICard } from "semantic-ui-react";

import ICardContentProps from "./ICardContentProps";

const CardContent = ({children, ...rest}: ICardContentProps) => {
    return <UICard.Content {...rest}>{children}</UICard.Content>
}

export default CardContent;