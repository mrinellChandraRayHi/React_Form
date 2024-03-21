import { useState } from "react";

const StateFullForm = () => {
    // state Setting......
    const [text, setText]=useState(null);
    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const [number, setNumber]=useState(null);
    const [error, setError]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password.length < 6){
            setError('password must be 6 character or longer');
        }else{
            setError('');
            console.log(text, email, password, number);
        }
    }

    const handleText=(e)=>{
        console.log(e.target.value);
        setText(e.target.value);
    }

    const handleEmail=(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePassword=(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleNumber=(e)=>{
        console.log(e.target.value);
        setNumber(e.target.value);
    }

    return (
        <div>
            <form onChange={handleSubmit}>
                <input onChange={handleText} className="py-2 border-2 border-black rounded-lg m-1" type="text" name="name" id="" /><br />
                <input onChange={handleEmail} className="py-2 border-2 border-black rounded-lg m-1" type="email" name="email" id="" /><br />
                <input onChange={handlePassword} className="py-2 border-2 border-black rounded-lg m-1" type="password" name="password" id="" /><br />
                <input onChange={handleNumber} className="py-2 border-2 border-black rounded-lg m-1" type="number" name="number" id="" /><br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;