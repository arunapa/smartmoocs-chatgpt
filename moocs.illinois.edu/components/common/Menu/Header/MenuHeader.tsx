import { Menu as UIMenu } from "semantic-ui-react";

import IMenuHeaderProps from "./IMenuHeaderProps";

const MenuHeader = ({children, ...rest}: IMenuHeaderProps) => {
    return <UIMenu.Header {...rest}>{children}</UIMenu.Header>;
}

export default MenuHeader;