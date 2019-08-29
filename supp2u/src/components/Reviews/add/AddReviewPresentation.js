import React from "react";

export default({addReview, cancel, review, setReview})=>{
    return (
        <form onSubmit={addReview}>
            <input type="text"
                   placeholder={"add Review"}
                   value={review}
                   onChange={(e) => setReview(e.target.value)}
            />
            <input type="submit" value="Add Review"/>
            <input type="submit" value="Cancel" onClick={cancel}/>
        </form>)
}