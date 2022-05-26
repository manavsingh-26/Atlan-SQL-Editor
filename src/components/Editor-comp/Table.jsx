import { getTableHeadFromData, getTableRowsFromData } from "../../assets/data/tableHelpers"
import '../../Pages/editor.css'


const Table = (props) => {
    return (
        <div className='query-table'>
            {props.result.length > 0 ? (
                <table>
                    <thead>
                        {getTableHeadFromData(props.result)}
                    </thead>
                    <tbody>
                        {getTableRowsFromData(props.result)}
                    </tbody>
                </table>
            ) : null}
        </div>
    )
}

export default Table