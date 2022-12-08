import {TableBody} from "./TableBody";
import {TableHead} from "./TableHead";
import {useSortableTable} from "./useSortableTable";

import css from './Table.module.css'

export const Table = ({data, columns}) => {
    const [tableData, handleSorting] = useSortableTable(data, columns);

    return (
        <div>
            <div>
                <table className={css.table}>
                        <TableHead {...{columns, handleSorting}} />

                        <TableBody {...{columns, tableData}} />
                </table>
            </div>
        </div>
    );
};

