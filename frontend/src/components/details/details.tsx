import { useWorkoutsContext } from "../../hooks/useWorkoutsContext"

const Details = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
        <div className="flex flex-col">
            <div className="font-medium">{workout.title}</div>
            <div>Load (kg): {workout.load}</div>
            <div>Reps: {workout.reps}</div>
            <div>{workout.createdAt}</div>
            <div className="bg-blue-500 cursor-pointer" onClick={handleClick}>delete</div>
        </div>
    )
}

export default Details;