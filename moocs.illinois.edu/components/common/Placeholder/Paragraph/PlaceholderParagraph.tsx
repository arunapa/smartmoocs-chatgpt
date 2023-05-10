import { Placeholder as UIPlaceholder } from "semantic-ui-react";

import IPlaceholderParagraphProps from "./IPlaceholderParagraphProps";

const PlaceholderParagraph = ({children, ...rest}: IPlaceholderParagraphProps) => {
    return <UIPlaceholder.Paragraph {...rest}>{children}</UIPlaceholder.Paragraph>
}

export default PlaceholderParagraph;