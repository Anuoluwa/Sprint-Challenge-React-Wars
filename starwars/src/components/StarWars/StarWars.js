import React, { Component } from 'react';
import './StarWars.css'

export class StarWars extends Component {
    render() {
        const {
            name,
            skin_color,
            starships,
            url,
            vehicles,
            birth_year,
            eye_color,
            films,
            gender,
            hair_color,
            height,
            homeworld,
            mass,
            created,
            edited

        } = this.props.starWarsChar

        return (
            <div className="card">
                <ul>
                    <li> <em>Name:</em> <strong>{name}</strong></li>
                    <li> <em>Height:</em> <strong>{height}</strong></li>
                    <li> <em>Birth Year:</em> <strong>{birth_year}</strong></li>
                    <li> <em>Gender:</em> <strong>{gender}</strong></li>
                    <li> <em>Vehicles:</em> <strong>{vehicles}</strong></li>
                    <li> <em>Star Ships:</em> <strong>{starships}</strong></li>
                    <li> <em>Eye Color:</em> <strong>{eye_color}</strong></li>
                    <li> <em>Home World:</em> <strong>{homeworld}</strong></li>
                    <li> <em>Skin Color:</em> <strong>{skin_color}</strong></li>
                    <li> <em>Hair Color:</em> <strong>{hair_color}</strong></li>
                    <li> <em>Mass:</em> <strong>{mass}</strong></li>
                    <li> <em>URL:</em> <strong>{url}</strong></li>
                    <li> <em>Created:</em> <strong>{created}</strong></li>
                    <li> <em>Edited:</em> <strong>{edited}</strong></li>
                </ul>
            </div>
        )
    }
}

export default StarWars
