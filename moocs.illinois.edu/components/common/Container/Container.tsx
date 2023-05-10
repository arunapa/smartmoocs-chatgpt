import { Container as UIContainer } from "semantic-ui-react";

import IContainerProps from "./IContainerProps";

const Container = ({children, ...rest}: IContainerProps) => {
    return <UIContainer {...rest}>{children}</UIContainer>;
}

export default Container;