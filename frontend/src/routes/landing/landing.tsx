import { useEffect, useState } from "react";
import Details from "../../components/details/details";

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
        <div>
            <div className="text-2xl">Landing Page</div>
            <div className="flex flex-col gap-y-10">
                {workouts && workouts.map((workout) => (
                    <div className="border border-black bg-white">
                        <Details key={workout._id} workout={workout} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Landing;