import { Label as UILabel } from "semantic-ui-react";

import ILabelDetailProps from "./ILabelDetailProps";

const LabelDetail = ({children, ...rest}: ILabelDetailProps) => {
    return <UILabel.Detail {...rest}>{children}</UILabel.Detail>
}

export default LabelDetail;