import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    const error = useRouteError();
    console.log(`Error Status: ${error.status} - ${error.data}`)

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            {/* <p>(Error Status: {error.status} - {error.error.message}) </p> */}
            <p>{error.data || error.message}</p>
            <button onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
    );
}

export default Error;
