import React from "react";
import { withRouter } from "react-router-dom";
import AddToFollows from "../components/buttons/addToFollows";
import PageTemplate from "../components/templatePersonPage"
import usePerson from "../hooks/usePerson";
import Unfollow from "../components/buttons/unfollow";

const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id)  // NEW
  return (
    <>
      {person ? (
        <>
          <PageTemplate
            person={person}
            action={(person) => {
              return <AddToFollows person={person} />;
            }}
            unfollow_action={(person) => {
              return <Unfollow person={person} />;
            }}
          />\
        </>
      ) : (
        <p>Waiting for person details</p>
      )
      }
    </>
  );
};

export default withRouter(PersonPage);