import React from 'react';
import EventItem from './EventItem';
import classes from './EventList.module.css';
const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((item) => {
        const { title, image, date, location, id } = item;
        return (
          <EventItem title={title} image={image} date={date} location={location} id={id} key={id} />
        );
      })}
    </ul>
  );
};

export default EventList;
