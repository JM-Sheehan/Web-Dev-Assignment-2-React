import React, { useState } from "react";
import Header from "../headerMovieList";
import PeopleList from "../peopleList";
import PeopleFilters from "../peopleFilter";

const PeopleListPageTemplate = ({ people, title,
    unfollow_action, action }) => {
    const [nameFilter, setNameFilter] = useState("");

    let displayedPeople = people
        .filter(p => {
            return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        });

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
    };

    return (
        <>
            <Header title={title} numMovies={displayedPeople.length} />
            <PeopleFilters onUserInput={handleChange} numMovies={displayedPeople.length} />
            <PeopleList
                action={action}
                unfollow_action = {unfollow_action}
                people={displayedPeople}
            />
        </>
    );
};

export default PeopleListPageTemplate;