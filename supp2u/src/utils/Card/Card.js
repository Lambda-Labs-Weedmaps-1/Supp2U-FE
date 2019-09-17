import React, {useState, useEffect} from 'react'
import './card.sass';

export default (props) => {
    let [animated, setAnimated] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setAnimated(true)
        }, props.delay)
    }, []);
    const {delay = 0, noAnimation, primary, big, clickable, bgImage} = props;
    let classes = `${primary && 'primary'} ${clickable && 'clickable'} ${big && 'big'} ${noAnimation && 'noAnimation'} ${animated && 'animation'}`;
    return (
        <div
            className={`card ${classes}`}
            onMouseEnter={(e) => console.dir( e.target.classList)}
            {...props}
        >
            <div className={"card--image"} style={{backgroundImage: `url(${bgImage})`}}
            />
            {props.children}
        </div>
    )
}