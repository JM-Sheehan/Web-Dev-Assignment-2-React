import React from "react";
import PersonDetails from "../personDetails";
import PersonBio from "../personBio";
import "./personDetails.css";

const TemplatePersonPage = ({ person, action,
unfollow_action })=> {
    return (
        <>
            <div className="row">
                <div className="col-sm-3 bg-info text-dark center">
                    <PersonDetails person = {person} action = {action}
                    unfollow_action = {unfollow_action}/>
                </div>
                <div className="col-sm-8 bg-light">
                    <PersonBio person = {person}/>
                </div>
            </div>

        </>
    );
};

export default TemplatePersonPage;