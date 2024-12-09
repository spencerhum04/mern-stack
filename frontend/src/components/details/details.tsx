const Details = ({ workout }) => {
    return (
        <div className="flex flex-col">
            <div className="font-medium">{workout.title}</div>
            <div>Load (kg): {workout.load}</div>
            <div>Reps: {workout.reps}</div>
            <div>{workout.createdAt}</div>
        </div>
    )
}

export default Details;