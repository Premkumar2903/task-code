
export default function Textinput ({label, type, value, onChange, placeholder}) {
    return(
        <div>
            <label style={{display:'block',marginBottom: '5px'}}>{label}</label>

            <input 
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}