
import users from "./Users";
import { useLocation, useNavigate, useParams } from "react-router-dom";


export default function Userdetails () {
    const {id} = useParams();
    const navigate = useNavigate();
    const {state} = useLocation(); 

    return (
        <>
            <h3>USER ID: {id}</h3>
            <p>User-name: {state?.name}</p>

            
            <button onClick={() => navigate('/users')}>
                Back to Users
            </button>
        </>
    )
}