import React from 'react';
                //destrutring
const Card = ({name, email, id}) =>{
    //const {name, email, id} = props;
    return(
        
        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}!?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;