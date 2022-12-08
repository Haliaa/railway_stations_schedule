import {TableBody} from "./TableBody";
import {TableHead} from "./TableHead";
import {useSortableTable} from "./useSortableTable";

export const Table = ({data, columns}) => {
    const [tableData, handleSorting] = useSortableTable(data, columns);

    return (
        <div>
            <div>
                <table className="table">
                        <TableHead {...{columns, handleSorting}} />

                        <TableBody {...{columns, tableData}} />
                </table>
            </div>
        </div>
    );
};

