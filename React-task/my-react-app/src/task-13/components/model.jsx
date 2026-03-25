
// export default function Model ({open,title,children,onClose}) {
//     if(!open) return null;


//     return(
//         <div>
//             <div>
//                 <h2>{title}</h2>

//                 {children}

//                 <button onClick={onClose} >
//                     close
//                 </button>
//             </div>
//         </div>
//     )
// }


export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg min-w-[300px]">
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        {children}

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}