import { useCallback, useEffect, useMemo, useState } from "react"

export default function UserRun () {

    const [user, setUser] = useState([]);
    const [filter, setFilter] = useState('');

    const fetchUser = useCallback(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);


    useEffect(()=> {
        fetchUser();
    }, [fetchUser]);


    const filteredUsers = user.filter(user => 
        user.name.toLowerCase().includes(filter.toLowerCase())
    )
    
    const totalUser = useMemo(()=> {
        console.log('calculating.')
        return filteredUsers.length;
    }, [filteredUsers]);

    useEffect(()=> {
        const timer = setTimeout(()=> {
            console.log('Timer runing.')
        }, 2000);

        return() => clearTimeout(timer);
    }, []);

    return(
        <>
            <h2>User list</h2>
            
            <input
                type="text"
                placeholder="Search user"
                value={filter}
                onChange={(e) => setFilter(e.target.value)} 
            />  
            <br/>

            <button onClick={fetchUser}>Refresh</button>

            <p>Total User: {totalUser}</p>

            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </>
    )
}