import { useEffect, useState } from "react";
import Details from "../../components/details/details";
import Form from "../../components/form/form";

function Landing() {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])

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