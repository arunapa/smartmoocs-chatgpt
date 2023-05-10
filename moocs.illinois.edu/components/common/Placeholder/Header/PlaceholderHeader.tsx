import { Placeholder as UIPlaceholder } from "semantic-ui-react";

import IPlaceholderHeaderProps from "./IPlaceholderHeaderProps";

const PlaceholderHeader = ({children, ...rest}: IPlaceholderHeaderProps) => {
    return <UIPlaceholder.Header {...rest}>{children}</UIPlaceholder.Header>
}

export default PlaceholderHeader;