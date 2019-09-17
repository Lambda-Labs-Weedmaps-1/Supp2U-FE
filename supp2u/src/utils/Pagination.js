import React from 'react'

export default ({totalList, limit, paginate}) =>{
    let pageNumber = []
    for(let i = 0; i < Math.ceil(totalList/limit); i++){
        pageNumber.push(i);
    }
    return(
        <ul className={'pagination--list'}>
            {pageNumber.map(number=>{
                return <li key={number} className={"pagination--item"} onClick={()=> paginate(number)}>
                    {number}
                </li>
            })}
        </ul>
    )
}