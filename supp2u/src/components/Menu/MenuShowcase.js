import React, {useEffect, useState} from 'react'
import api from '../../config/Axios'

import './menu.sass'
import Card from "../../utils/Card/Card";
import itemPhoto from '../../assets/Item-1.jpg';
import {getCategory} from "./helper"
import Modal from "../../utils/Modal/Modal";
// this component renders all the items from a specified menu
// when used anywhere just pass the id of the menu you are trying to access from the parent component as a prop
function MenuShowcase(props) {
    //these items are set and then mapped over
    const [item, setItem] = useState([{
        "item_name": "menu item name",
        "description": "Write a little bit about the item...",
        "cals": NaN,
        "price": 0,
        "category": "none",
        "image": null
    }])
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchitems = async () => {
            const res = await api.get(`${process.env.REACT_APP_BACKEND_URL}menus/${props.props}/items`);
            if (res.error) {
                console.log(res);
                return
            }
            setItem(res.data)
            setCategories(getCategory(res.data))
        };
        fetchitems();
    }, []);

    console.log("categories", categories);
    return (
        <>
            <div>
                {/* this code makes it so you have to create items before they display */}
                {item.item_name === "menu item name" ?
                    <p className="empty-menu-message">Add Items to your menu to see how your menu will look</p> :
                    <div className="menu-showcase">
                        {item.map(item => (
                            <Card bgImage={item.image ? item.image['url'] : itemPhoto}
                                  footer={<Modal title={item.item_name}> {/*  */}
                                      <Card bgImage={item.image ? item.image['url'] : itemPhoto}>
                                          <span style={{
                                              display: 'flex',
                                              justifyContent: "space-between",
                                              padding: "0px 10px"
                                          }}>
                                                <p>${item.price}</p>
                                                <p>description: {item.description}</p>
                                             </span>
                                      </Card>
                                  </Modal>}
                            >
                                <span style={{display: 'flex', justifyContent: "space-between", padding: "0px 10px"}}>
                                    <p>{item.item_name}</p>
                                    {/*<p>{item.description}</p>*/}
                                    <p>${item.price}</p>
                                </span>
                            </Card>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}

export default MenuShowcase
