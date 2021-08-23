import React, { useContext } from "react";
import PageTemplate from '../components/templatePeoplePage'
import {PeopleContext} from '../contexts/peopleContext'
import AddToFollows from "../components/buttons/addToFollows";
import Unfollow from "../components/buttons/unfollow";
const PeopleListPage = () => {
  const context = useContext(PeopleContext);
  // const people = context.people.filter((p) => {  // New
  //   return !("follow" in p);
  // });

  const people = context.people;
  return (
    <PageTemplate
      title="Popular People"
      people={people}  /* Changed */
      action={(person) => {
        return <AddToFollows person={person} />;
      }}
      unfollow_action={(person) => {
        return <Unfollow person={person} />;
      }}
    />
  );
};

export default PeopleListPage;