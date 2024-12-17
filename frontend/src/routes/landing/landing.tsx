import { useEffect } from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import Details from "../../components/details/details";
import Form from "../../components/form/form";

function Landing() {
    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <div className="flex flex-col gap-y-5 px-5">
            <div className="text-2xl">Landing Page</div>
            <div className="flex flex-col gap-y-10">
                {workouts && workouts.map((workout) => (
                    <div className="border border-black bg-white">
                        <Details key={workout._id} workout={workout} />
                    </div>
                ))}
            </div>
            <Form />
        </div>
    )
}

export default Landing;