import React from 'react';
import './card.css';

class Card extends React.Component{
    render(){
        const {name, id, email} = this.props;
        
        return (
            <div className="text-center bg-light-green dib br3 ma2 grow bw2 shadow-5">
            <img alt='alt' src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
        
    }

}

export default Card;