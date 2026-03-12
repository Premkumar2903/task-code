import Login from "./Login";
import Welcome from "./Welcome";


export default function Check ({isLoggedIn}) {
    
    return(
        <>
            {isLoggedIn ? <Welcome/> :<Login/>}
        </>
    )

}