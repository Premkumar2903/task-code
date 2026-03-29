// Passing data from a parent component → to a deeply nested child component through many intermediate components that don’t actually need the data, but must pass it down.

// This happens in React when components are deeply nested and when we don’t use Context / Redux.

export default function Child () {
    const username = 'Prem'

    return(
        <h3 >{username}</h3>
    );
};