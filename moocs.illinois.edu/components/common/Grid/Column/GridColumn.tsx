import { Grid as UIGrid } from "semantic-ui-react";

import IGridColumnProps from "./IGridColumnProps";

const GridColumn = ({children, ...rest}: IGridColumnProps) => {
    return <UIGrid.Column {...rest}>{children}</UIGrid.Column>;
}

export default GridColumn;