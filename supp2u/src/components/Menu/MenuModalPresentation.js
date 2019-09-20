import React from 'react';
import itemPhoto from "../../assets/Item-1.jpg";

export default ({item, isModalOpen, toggleModal}) =>{
    return (
        <div className={`modal__parent ${isModalOpen ? 'show': 'hide'}`} onClick={() => toggleModal(null)}>
            <div className={`modal ${isModalOpen ? 'show': 'hide'}`}>
                <div className="modal__body flex">
                    <div className="modal__body--left" style={{backgroundImage: `url(${item.image ? item.image['url'] : itemPhoto })`}}>
                        {/*<img src={item.image ? item.image['url'] : itemPhoto} alt="Menu Item"/>*/}
                    </div>
                    <div className="modal__body--right">
                                <span style={{display: 'flex', justifyContent: "space-between", padding: "0px 10px"}}>
                                    <p>{item.item_name}</p>
                                    <p >${item.price}</p>
                                </span>
                        <p>{item.description}</p>
                        <p>Calories: {item.cal}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}