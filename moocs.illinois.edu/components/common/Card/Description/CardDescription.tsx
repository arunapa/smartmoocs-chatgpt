import { Card as UICard } from "semantic-ui-react";

import ICardDescriptionProps from "./ICardDescriptionProps";

const CardDescription = ({children, ...rest}: ICardDescriptionProps) => {
    return <UICard.Description {...rest}>{children}</UICard.Description>
}

export default CardDescription;