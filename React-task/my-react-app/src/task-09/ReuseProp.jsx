
export default function Button ({children, varient}) {
    const styles = {
        primary: 'bg-blue-500  hover:bg-blue-600 active:bg-blue-700 text-white',
        danger: 'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white',
        line: ' hover:bg-gray-100 text-blue-500 border border-blue-500 active:bg-gray-300'
    };

    return(
        <button className={`px-4 py-2 rounded ${styles[varient]}`}>
            {children}
        </button>
    )
}