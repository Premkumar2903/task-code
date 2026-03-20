
export default function ButtonGroup () {

    return(
    <div className='flex   gap-3 mt-2'>
        <button className="bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 active:bg-blue-800">
            save
        </button>

        <button className="bg-yellow-400 px-4 py-2 hover:bg-yellow-500 active:bg-yellow-600" >
            cancel
        </button>

        <button className="bg-gray-500 text-white px-4 py-2 hover:bg-gray-600 active:bg-black" >
            delete
        </button>
    </div>)
}