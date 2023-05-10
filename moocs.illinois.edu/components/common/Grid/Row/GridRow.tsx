import { Grid as UIGrid } from "semantic-ui-react";

import IGridRowProps from "./IGridRowProps";

const GridRow = ({children, ...rest}: IGridRowProps) => {
    return <UIGrid.Row {...rest}>{children}</UIGrid.Row>;
}

export default GridRow;