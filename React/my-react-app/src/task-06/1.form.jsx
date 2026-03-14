import { useState } from "react"
import Textinput from "./2.textInput";

export default function Signup () {

    const [name,setName] = useState('');
    const[pass,setPass] = useState('');
    const [mail,setMail] = useState('');

    const [formData , setFormData] = useState(null);

    const isEmailValid = mail.includes('@') && mail.includes('.');

    const isFormValid = 
        name.trim() !== ''  &&   //removes spaces
        pass.trim() !== '' &&
        isEmailValid;            //makes valid mail includes  @ & .

    const submitHandle = (e) => {
        e.preventDefault();
        setFormData({ name , mail, pass});
    };

    const clearHandle = () => {
        setName('');
        setMail('')
        setPass('');
        setFormData(null);
    };

    return (
        <form onSubmit={submitHandle}
        >
           <Textinput 
                label='Name'
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={(e)=> setName(e.target.value)}
           />

           <Textinput
                label= 'Email'
                type='mail'
                placeholder='Enter mail'
                value={mail}
                onChange={(e)=> setMail(e.target.value)
                
                }
           />

           <Textinput
                label= 'Password'
                type= 'password'
                placeholder= 'Enter Password'
                value={pass}
                onChange={(e)=> setPass(e.target.value)}
           />

            <button type="submit"disabled={!isFormValid}> 
                Submit                          
            </button>

            <button type="button" onClick={clearHandle}>
                Clear
            </button>
            

            {formData && (
                <div>
                    <h3>Data:</h3>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.mail}</p>
                    <p>Password: {formData.pass}</p>
                </div>
            )}
        </form>
    )
};