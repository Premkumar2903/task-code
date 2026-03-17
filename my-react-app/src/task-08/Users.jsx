import { Link } from "react-router-dom";

export default function Users() {

    const user = [
        {id: 1 , name: 'jil'},
        {id: 2 , name: 'junk'},
        {id: 3, name: 'juck'}
    ];

    return(
        <>
            <h3>Users page</h3>

            {user.map((u) => (
                <p key={u.id}>
                    <Link to={`/users/${u.id}`}
                    state={u}               //passing user as prop
                >   
                    {u.name} </Link>
                </p>
            ))}
        </>
    )
}