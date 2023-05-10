import { Table as UITable } from "semantic-ui-react";

import ITableHeaderProps from "./ITableHeaderProps";

const TableHeader = ({children, ...rest}: ITableHeaderProps) => {
    return <UITable.Header {...rest}>{children}</UITable.Header>;
}

export default TableHeader;