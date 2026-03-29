import { useState } from "react";
import Modal from "../components/model";


 export default function () {
    const [open,setOpen] = useState(false);


    return(
        <>
            <button className="ml-3" onClick={()=> setOpen(true)}>Open About model</button>

            <Modal onClose={() => setOpen(false)} open={open} title='About modal'>
                <p >modal diaplayed on about page</p>
            </Modal>
        </>
    )
 }