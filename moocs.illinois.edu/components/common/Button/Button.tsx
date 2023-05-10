import { Button as UIButton } from "semantic-ui-react";

import IButtonProps from "./IButtonProps";

const Button = ({children, ...rest}: IButtonProps) => {
    return <UIButton {...rest}>{children}</UIButton>;
}

export default Button;