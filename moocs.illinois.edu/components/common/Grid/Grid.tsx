import { Grid as UIGrid } from "semantic-ui-react";

import IGridProps from "./IGridProps";

const Grid = ({children, ...rest}: IGridProps) => {
    return <UIGrid {...rest}>{children}</UIGrid>;
}

export default Grid;