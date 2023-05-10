import { Label as UILabel } from "semantic-ui-react";

import ILabelGroupProps from "./ILabelGroupProps";

const LabelGroup = ({children, ...rest}: ILabelGroupProps) => {
    return <UILabel.Group {...rest}>{children}</UILabel.Group>
}

export default LabelGroup;