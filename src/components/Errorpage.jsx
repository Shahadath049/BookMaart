import { useRouteError } from "react-router";

const Errorpage = () => {
    const error = useRouteError();
    
    return (
        <div>
            <h1>Error is big</h1>
            <p>{error.message}</p>
            
        </div>
    );
};

export default Errorpage;