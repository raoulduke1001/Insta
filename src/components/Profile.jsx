import React from 'react';
import User from "./User";
import Palette from "./Palette";

const Profile = () => {
    return(
        <div className="container profile">
            <User 
                src="https://static.bershka.net/4/photos2/2019/V/0/1/p/1966/381/250/1966381250_1_1_3.jpg?t=1554885223409" 
                alt="girl" 
                name="Pretty woman"/>
            <Palette/>
        </div>
    )
}
export default Profile;