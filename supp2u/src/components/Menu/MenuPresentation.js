import React from 'react';
import itemPhoto from "../../assets/Item-1.jpg";
import Card from "../../utils/Card/Card";
export default ({item, toggleModal}) =>{
    return(
        <Card bgImage={item.image ? item.image['url'] : itemPhoto}
              onClick={() => toggleModal(item)}
              clickable
        >
                                <span style={{display: 'flex', justifyContent: "space-between", padding: "0px 10px"}}>
                                    <p>{item.item_name}</p>
                                    {/*<p>{item.description}</p>*/}
                                    <p >${item.price}</p>
                                </span>
            <p className={'link'} onClick={() => toggleModal(item)}>Read more...</p>
        </Card>
    )
}