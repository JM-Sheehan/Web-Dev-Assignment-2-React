import React from "react";
import PersonCard from "../personCard";
import { getGender } from '../../api/tmdb-api'
import "./personDetails.css";

export default ({ person, action,
unfollow_action }) => {
    return (
        <>
            <PersonCard formatting = ""
            person = {person} action = {action}
            unfollow_action = {unfollow_action}/>
            
            <h4>PERSONAL INFO</h4>
            <div className="info">
                <h5>Known For:</h5>
                <p>{person.known_for_department}</p>
            </div>
            <div className="info">
                <h5>Gender:</h5>
                <p>{getGender(person.gender)}</p>
            </div>
            <div className="info">
                <h5>Birthday:</h5>
                <p>{person.birthday}</p>
            </div>
            <div className="info">
                <h5>Place of Birth:</h5>
                <p>{person.place_of_birth}</p>
            </div>
            <div className="info">
                <h5>
                    Also Known As:
                </h5>
                <ul className="list-group aka">
                    {person.also_known_as.map(pc => (
                        <li key={pc.name} className="list-group-item bg-dark text-white">
                            {pc}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
};
