import css from '../Schedule/Schedule.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {schedulesActions} from "../../redux";

export const TableBody = ({columns, tableData}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (<tbody>
    {tableData.map((data) => {

        const deleteById = async () => {
            await dispatch(schedulesActions.deleteById({id: data._id}));
        }
        const updateById = async () => {
            console.log(data);
            // const train = [...data]
            // await dispatch(trainsActions.setTrainForUpdate({train: data}))
             await dispatch(schedulesActions.setScheduleForUpdate({schedule:data}))
        }
        const getDetailsById = () => {
            navigate(`/schedules/${data._id}`)
        }

        return (<tr key={data._id}>
            {columns.map(({accessor}) => {
                const index = tableData.indexOf(data) + 1;
                if (accessor === 'actions') {
                    return (<td key={accessor}>
                        <button className={css.buttonDelete} onClick={deleteById}>delete</button>
                        <button className={css.buttonUpdate} onClick={updateById}>update</button>
                        <button className={css.buttonGetDetails} onClick={getDetailsById}>get Details</button>
                    </td>);
                } else {
                    const tData = data[accessor] ? data[accessor] : index;
                    return <td key={accessor}>{tData}</td>;
                }
            })}
        </tr>)
    })}
    </tbody>)
};
