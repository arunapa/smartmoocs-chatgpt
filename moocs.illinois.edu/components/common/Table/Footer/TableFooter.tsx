import { Table as UITable } from "semantic-ui-react";

import ITableFooterProps from "./ITableFooterProps";

const TableFooter = ({children, ...rest}: ITableFooterProps) => {
    return <UITable.Footer {...rest}>{children}</UITable.Footer>;
}

export default TableFooter;