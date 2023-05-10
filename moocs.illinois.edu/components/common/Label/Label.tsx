import { Label as UILabel } from "semantic-ui-react";

import ILabelProps from "./ILabelProps";

const Label = ({children, ...rest}: ILabelProps) => {
    return <UILabel {...rest}>{children}</UILabel>
}

export default Label;