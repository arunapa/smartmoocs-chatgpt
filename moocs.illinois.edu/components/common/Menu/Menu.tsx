import { Menu as UIMenu } from "semantic-ui-react";

import IMenuProps from "./IMenuProps";

const Menu = ({children, ...rest}: IMenuProps) => {
    return <UIMenu {...rest}>{children}</UIMenu>;
}

export default Menu;