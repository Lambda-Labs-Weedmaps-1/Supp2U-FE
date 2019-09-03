import React from "react";

export default({addCustomer, history})=>{


    const cancel = (e)=>{
        e.preventDefault();
        history.goBack();
    };
    const onSubmitHandler = e =>{
        e.preventDefault();
        addCustomer()
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <input type="submit" value="Create Customer"/>
            <input type="submit" value="Cancel" onClick={cancel}/>
        </form>)
}