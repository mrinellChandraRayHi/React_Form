import { useEffect, useRef } from "react";

const UseRef_Form = () => {
    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input ref={nameRef} className="border-black border-2" type="text" name="text" id="" /><br />
                <input ref={emailRef} className="border-black border-2" type="email" name="text" id="" defaultValue={'mrinell@gmail.com'} /><br />
                <input className="border-black border-2" type="password" name="text" id="" /><br />
                <input ref={passwordRef} className="border-2 border-black px-3" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UseRef_Form;