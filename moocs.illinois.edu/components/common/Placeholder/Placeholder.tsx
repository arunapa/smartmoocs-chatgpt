import { Placeholder as UIPlaceholder } from "semantic-ui-react";

import IPlaceholderProps from "./IPlaceholderProps";

const Placeholder = ({children, ...rest}: IPlaceholderProps) => {
    return <UIPlaceholder {...rest}>{children}</UIPlaceholder>
}

export default Placeholder;