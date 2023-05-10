import { Placeholder as UIPlaceholder } from "semantic-ui-react";

import IPlaceholderLineProps from "./IPlaceholderLineProps";

const PlaceholderLine = ({children, ...rest}: IPlaceholderLineProps) => {
    return <UIPlaceholder.Line {...rest}>{children}</UIPlaceholder.Line>
}

export default PlaceholderLine;