import { Table as UITable } from "semantic-ui-react";

import ITableRowProps from "./ITableRowProps";

const TableRow = ({children, ...rest}: ITableRowProps) => {
    return <UITable.Row {...rest}>{children}</UITable.Row>;
}

export default TableRow;