import { Table as UITable } from "semantic-ui-react";

import ITableProps from "./ITableProps";

const Table = ({children, ...rest}: ITableProps) => {
    return <UITable {...rest}>{children}</UITable>;
}

export default Table;