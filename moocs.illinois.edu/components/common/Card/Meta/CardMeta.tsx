import { Card as UICard } from "semantic-ui-react";

import ICardMetaProps from "./ICardMetaProps";

const CardMeta = ({children, ...rest}: ICardMetaProps) => {
    return <UICard.Meta {...rest}>{children}</UICard.Meta>
}

export default CardMeta;