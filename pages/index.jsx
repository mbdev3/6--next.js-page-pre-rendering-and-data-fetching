import React, { useEffect } from 'react';
import EventList from '../components/events/eventList';

import useSWR from 'swr';
import { getFeaturedEvents } from '../helpers/api-utils';
const getData = () => {
  const { data, error } = useSWR(
    'https://next-course-cf26e-default-rtdb.europe-west1.firebasedatabase.app/events.json',
    (url) => fetch(url).then((res) => res.json())
  );
  useEffect(() => {
    if (data) {
      const arrayEvents = [];
      console.log(data);
    }
  }, [data]);

  return data;
};

const HomePage = (props) => {
  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
  };
};

export default HomePage;
