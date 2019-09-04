import React, {useState} from "react";

export default({addCustomer, history})=>{
    let [name, setName] = useState("");

    const cancel = (e)=>{
        e.preventDefault();
        history.goBack();
    };
    const onSubmitHandler = e =>{
        e.preventDefault();
        addCustomer(name)
    };
    return (
        <form onSubmit={onSubmitHandler} className={"customer form"}>
            <input type="text" value={name} onChange={e => setName(e.target.value) } placeholder={"Name"} />
            <input type="submit" value="Create Customer"/>
            <input type="submit" value="Cancel" onClick={cancel}/>
        </form>)
}