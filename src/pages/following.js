import React, {useContext} from "react";
import PeopleListPageTemplate from "../components/templatePeoplePage";
import Unfollow from '../components/buttons/unfollow'
import {PeopleContext} from '../contexts/peopleContext'
import AddToFollows from "../components/buttons/addToFollows";
const FollowPage = props => {
  const context = useContext(PeopleContext);
  const following = context.people.filter( p => p.follow )
  return (
    <PeopleListPageTemplate
      people={following}
      title={"Following"}
      action={person => <AddToFollows person={person} />}
      unfollow_action={person => <Unfollow person={person} />}
    />
  );
};

export default FollowPage;