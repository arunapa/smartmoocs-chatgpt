import { Header as UIHeader } from "semantic-ui-react";

import IHeaderProps from "./IHeaderProps";

const Header = ({children, ...rest}: IHeaderProps) => {
    return <UIHeader {...rest}>{children}</UIHeader>;
}

export default Header;