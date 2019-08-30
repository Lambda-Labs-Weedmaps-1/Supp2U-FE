import React from "react";
import "./style.sass";
export default (props) =>{
    return <div className={"profile"}>
        <div className="profile__header flex">
            <div className="row">
                <div className="profile__header--image">
                    <img src="https://iso.500px.com/wp-content/uploads/2015/06/bwportraits_cover.jpeg" alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="profile--info">
                    <p className="profile__p">Full Name</p>
                </div>
                <div className="profile--address">
                    <p className="profile__p">1234 SE 234rd AVE, <strong>Denver, CO</strong> </p>
                </div>
            </div>
            <div className="row">
            </div>
        </div>
        <div className="profile__body flex">
            <div className="row">
                <ul>
                    <li>Overview</li>
                    <li>Reviews</li>
                    <li>Photos</li>
                    <li>Compliments</li>
                </ul>
            </div>
            <div className="row">
                <div className="row--header">
                    <h3>Recent Reviews</h3>
                    <select name="" id="">Sort by</select>
                    <option value="Newest First">Newest First</option>
                    <option value="Rating">Rating</option>
                </div>
                Reviews
                <div className="review">
                    <div className="review--header">
                        <p className="review__p">Robota Grill & shushi</p>
                        <p className="review__p">1234 SE 103rd AVE Denver, CO </p>
                    </div>
                    <div className="review--body">
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis repudiandae sapiente
                            soluta. Commodi dignissimos doloremque et impedit minus modi odio porro ratione, repellendus
                            similique suscipit, tenetur, vel velit vero voluptas.
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <h4>Show stats here??</h4>
                <ul className="profile--interest">
                    <li>Taco</li>
                </ul>
            </div>
        </div>

    </div>
}