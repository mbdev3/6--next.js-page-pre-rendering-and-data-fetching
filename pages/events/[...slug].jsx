import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../data';
import EventList from '../../components/events/eventList';
import ResultsTitle from '../../components/events/results-title';

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <h1 className='center'>Loading...</h1>;
  }
  if (filterData.length !== 2) {
    return <h1 className='center'>invalid url</h1>;
  }
  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (isNaN(filteredMonth) || isNaN(filteredYear)) {
    return <h1 className='center'>invalid url, please adjust your values</h1>;
  }

  const filteredEvents = getFilteredEvents({ year: filteredYear, month: filteredMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return <h1 className='center'>No event was found</h1>;
  }
  const date = new Date(filteredYear, filteredMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;
