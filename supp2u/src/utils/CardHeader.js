import React from 'react';

export default ({searchHook, title, searchByHook}) => {
    const [search, setSearch] = searchHook;
   return(
       <div className={"searchCard__header"}>
           <h2>{title}</h2>
           <select name="search by" id="" onChange={e => searchByHook[1](e.target.value)}>
               <option value="recent">Recent</option>
               <option value="old">Old</option>
               <option value="highest rating">Highest Rating</option>
               <option value="lowest rating">Lowest Rating</option>
           </select>


           <input
               id="standard-search"
               type='text'
               value={search}
               placeholder={"search"}
               onChange={e => setSearch(e.target.value)}
           />
       </div>

        )
}