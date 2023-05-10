import { Table as UITable } from "semantic-ui-react";

import ITableHeaderCellProps from "./ITableHeaderCellProps";

const TableHeaderCell = ({children, ...rest}: ITableHeaderCellProps) => {
    return <UITable.HeaderCell {...rest}>{children}</UITable.HeaderCell>;
}

export default TableHeaderCell;