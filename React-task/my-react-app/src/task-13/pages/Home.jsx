import { useState } from "react";
import Model from "../components/model";

// export default function Home() {

//     const [open,setOpen] = useState(false);
    
//     return (
//         <>
//             <button onClick={() => setOpen(true)}>open home model</button>

//             <Model open={open} onClose={()=> setOpen(false)} title = 'Home Model'>
//                 <p>Model displayed on home page</p>
//             </Model>
//         </>
//     )
// }


// import { useState } from "react";
// import Modal from "@/components/Modal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Home Modal</button>

    <Model open={open} onClose={() => setOpen(false)} title="Home Modal">
        <p>This modal is displayed on the Home page.</p>
    </Model>
      
    </>
  );
}