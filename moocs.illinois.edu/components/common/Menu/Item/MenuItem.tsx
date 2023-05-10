import { Menu as UIMenu } from "semantic-ui-react";

import IMenuItemProps from "./IMenuItemProps";

const MenuItem = ({children, ...rest}: IMenuItemProps) => {
    return <UIMenu.Item {...rest}>{children}</UIMenu.Item>;
}

export default MenuItem;