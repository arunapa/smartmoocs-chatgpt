import { Loader as UILoader } from "semantic-ui-react";

import ILoaderProps from "./ILoaderProps";

const Loader = ({children, ...rest}: ILoaderProps) => {
    return <UILoader {...rest}>{children}</UILoader>;
}

export default Loader;