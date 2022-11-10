import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById, getAllEvents } from '../../helpers/api-utils';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
const SingleEvent = (props) => {
  const event = props.event;
  console.log('first', event);

  if (!event) {
    return (
      <div>
        <h1>No event found.</h1>
      </div>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const event = await getEventById(id);
  return {
    props: {
      event,
    },
  };
};
export const getStaticPaths = async () => {
  const events = await getAllEvents();

  const paths = events.map((event) => ({
    params: {
      id: event.id,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export default SingleEvent;
