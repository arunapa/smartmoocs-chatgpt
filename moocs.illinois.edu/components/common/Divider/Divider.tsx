import { Divider as UIDivider } from "semantic-ui-react";

import IDividerProps from "./IDividerProps";

const Divider = ({children, ...rest}: IDividerProps) => {
    return <UIDivider {...rest}>{children}</UIDivider>;
}

export default Divider;