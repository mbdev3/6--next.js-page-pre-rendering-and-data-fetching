import React, { Fragment } from 'react';
import EventList from '../../components/events/eventList';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../data';
import { useRouter } from 'next/router';
const EventMainPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default EventMainPage;
