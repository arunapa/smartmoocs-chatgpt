import { Table as UITable } from "semantic-ui-react";

import ITableBodyProps from "./ITableBodyProps";

const TableBody = ({children, ...rest}: ITableBodyProps) => {
    return <UITable.Body {...rest}>{children}</UITable.Body>;
}

export default TableBody;