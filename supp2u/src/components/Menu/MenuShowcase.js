import React, {useEffect, useState} from 'react'
import api from '../../config/Axios'

import './menu.sass'
import {getCategory} from "./helper"
import MenuPresentation from "./MenuPresentation";
import MenuModalPresentation from "./MenuModalPresentation";

// this component renders all the items from a specified menu
// when used anywhere just pass the id of the menu you are trying to access from the parent component as a prop
function MenuShowcase(props) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [item, setItem] = useState({});

    const toggleModal = (item) =>{
        setModalOpen(!isModalOpen);
        item && setItem(item);
    };
    //these items are set and then mapped over
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchitems = async () => {
            const res = await api.get(`${process.env.REACT_APP_BACKEND_URL}menus/${props.props}/items`);
            if (res.error) {
                console.log(res);
                return
            }
            setItems(res.data);
            setCategories(getCategory(res.data));
            setLoading(false);
        };
        fetchitems();
    }, []);
    if(isLoading){
        return <p>Loading...</p>
    }
    return (
        <>
            <div className={"menu"}>
                {/* this code makes it so you have to create items before they display */}
                {items.length === 0 ?
                    <p className="empty-menu-message">Add Items to your menu to see how your menu will look</p> :
                    <div className="menu-showcase">
                        {items.map(item => (
                            <MenuPresentation item={item} toggleModal={toggleModal}/>
                        ))}
                    </div>
                }
                <MenuModalPresentation item={item} isModalOpen={isModalOpen} toggleModal={toggleModal}/>
            </div>
        </>
    )
}

export default MenuShowcase
