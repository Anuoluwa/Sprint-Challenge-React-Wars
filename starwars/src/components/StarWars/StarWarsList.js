import React from 'react'
import StarWars from './StarWars';

function StarWarsList(props) {
  
        return (
            <div>
                {
                    props.starWarsChar.map((star) => {
                        return(
                            <StarWars key={star.created} starWarsChar={star}/>
                        )
                    })
                }
            </div>
        )
}

export default StarWarsList
