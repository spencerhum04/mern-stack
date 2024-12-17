import { useState } from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";

const Form = () => {
    const { dispatch } = useWorkoutsContext()
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        setSubmitted(true);

        const workout = {title, load, reps }

        try {
            const response = await fetch('/api/workouts', {
                method: 'POST',
                body: JSON.stringify(workout),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error || 'An unexpected error occurred');
                setEmptyFields(json.emptyFields)
                return;
            }

            setError(null);
            setTitle('');
            setLoad('');
            setReps('');
            setEmptyFields([])
            console.log('New workout added:', json);
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        } catch (err) {
            // setError('Failed to submit the workout. Please try again.');
        }
    }

    return (
        <form className="border border-black p-2 bg-white flex flex-col" onSubmit={handleSubmit}>
            <div>Add a new workout</div>
            <label>Exercise title:</label>
            <input className={emptyFields.includes('title') ? 'border border-red-500 px-2.5 py-2 focus:outline-none' : 'border border-black px-2.5 py-2 focus:outline-none'} type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            <label>Load (kg):</label>
            <input className={emptyFields.includes('load') ? 'border border-red-500 px-2.5 py-2 focus:outline-none' : 'border border-black px-2.5 py-2 focus:outline-none'} type="number" onChange={(e) => setLoad(e.target.value)} value={load} />
            <label>Reps:</label>
            <input className={emptyFields.includes('reps') ? 'border border-red-500 px-2.5 py-2 focus:outline-none' : 'border border-black px-2.5 py-2 focus:outline-none'} type="number" onChange={(e) => setReps(e.target.value)} value={reps} />
            <button className="border border-black bg-slate-100 hover:bg-slate-200 mt-2.5">Add Workout</button>
            {submitted && error &&
                <div>{error}</div>
            }
            {submitted && !error &&
                <div>New workout added</div>
            }
        </form>
    )
}

export default Form;