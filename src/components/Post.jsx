import React, {Component} from 'react';
import User from "./User";

export default class Post extends Component{
    render(){
        return(
            <div className="post">
                <User 
                src="https://static.bershka.net/4/photos2/2019/V/0/1/p/1966/381/250/1966381250_1_1_3.jpg?t=1554885223409" 
                alt="girl" 
                name="beauty"
                min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                Account
                </div>
                <div className="post__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
        )
    }
}