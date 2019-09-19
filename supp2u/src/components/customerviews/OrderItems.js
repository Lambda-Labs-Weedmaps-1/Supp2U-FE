import React, {useState, useEffect} from 'react';
import api from '../../config/Axios';
import itemPhoto from '../../assets/Item-1.jpg';
export default (props) =>{
    let [item, setItem] = useState({});
    let [isLoading, setLoading] = useState(true);
    useEffect(()=>{
        const getItemInfo = async ()=>{
            let res = await api.get(`/items/${props.item.id}`);
            if(res.error) return ;
            setItem(res.data);
            setLoading(false);
        }
        getItemInfo();
    },[]);
    if(isLoading)
        return <p>Loading...</p>;
    return (
        <div className={"flex"}>
            <div className="orderItem__left">
                <img src={item.image ? item.image.url : itemPhoto} alt="Item"/>
            </div>
            <div className="orderItem__right">
                <p> {item.item_name}</p>
                <p className={'orderItem__right--price'}>${item.price}</p>
                <p> {item.description}</p>
            </div>
        </div>
    )
}