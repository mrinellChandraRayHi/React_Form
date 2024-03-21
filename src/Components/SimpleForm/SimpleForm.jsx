const SimpleForm = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border border-black rounded-lg my-3 px-1 py-2" type="text" name="name" id="" /><br />
                <input className="border border-black rounded-lg my-3 px-1 py-2" type="email" name="email" id="" /><br />
                <input className="border border-black rounded-lg my-3 px-1 py-2" type="number" name="number" id="" /><br />
                <input type="submit" value="Submitted" />
            </form>
        </div>
    );
};

export default SimpleForm;
