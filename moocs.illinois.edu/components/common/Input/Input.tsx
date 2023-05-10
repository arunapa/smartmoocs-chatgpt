import { Input as UIInput } from "semantic-ui-react";

import IInputProps from "./IInputProps";

const Input = ({children, ...rest}: IInputProps) => {
    return <UIInput {...rest}>{children}</UIInput>
}

export default Input;