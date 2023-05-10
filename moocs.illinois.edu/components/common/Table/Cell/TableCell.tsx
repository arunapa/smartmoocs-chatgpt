import { Table as UITable } from "semantic-ui-react";

import ITableCellProps from "./ITableCellProps";

const TableCell = ({children, ...rest}: ITableCellProps) => {
    return <UITable.Cell {...rest}>{children}</UITable.Cell>;
}

export default TableCell;