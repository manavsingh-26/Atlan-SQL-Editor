import { getTableHeadFromData, getTableRowsFromData } from "../../assets/data/tableHelpers"
import '../../Pages/editor.css'

//Displaying the whole Table
const Table = (props) => {
    return (
        <div className='query-table'>
            {props.result.length > 0 ? (
                <table>
                    <thead>
                        {/* Column names: */}
                        {getTableHeadFromData(props.result)}
                    </thead>
                    <tbody>
                        {/* All row data */}
                        {getTableRowsFromData(props.result)}
                    </tbody>
                </table>
            ) : null}
        </div>
    )
}

export default Table