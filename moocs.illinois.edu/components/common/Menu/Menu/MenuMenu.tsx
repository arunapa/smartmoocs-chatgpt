import { Menu as UIMenu } from "semantic-ui-react";

import IMenuMenuProps from "./IMenuMenuProps";

const MenuMenu = ({children, ...rest}: IMenuMenuProps) => {
    return <UIMenu.Menu {...rest}>{children}</UIMenu.Menu>;
}

export default MenuMenu;