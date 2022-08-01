import { Fragment } from "react";
import { useRouter } from "next/router";

import { getFilteredEvents } from "../../helpers/apiUtil";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage(props) {
  const { events, date } = props;

  if (!events) {
    return <p className="center">Loading...</p>;
  }

  if (events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  // if (
  //   isNaN(numYear) ||
  //   isNaN(numMonth) ||
  //   numYear > 2030 ||
  //   numYear < 2021 ||
  //   numMonth < 1 ||
  //   numMonth > 12
  // ) {
  //   return (
  //     <Fragment>
  //       <ErrorAlert>
  //         <p>Invalid filter. Please adjust your values!</p>
  //       </ErrorAlert>
  //       <div className='center'>
  //         <Button link='/events'>Show All Events</Button>
  //       </div>
  //     </Fragment>
  //   );
  // }

  // const filteredEvents = getFilteredEvents({
  //   year: numYear,
  //   month: numMonth,
  // });

  // if (!filteredEvents || filteredEvents.length === 0) {
  //   return (
  //     <Fragment>
  //       <ErrorAlert>
  //         <p>No events found for the chosen filter!</p>
  //       </ErrorAlert>
  //       <div className='center'>
  //         <Button link='/events'>Show All Events</Button>
  //       </div>
  //     </Fragment>
  //   );
  // }

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </Fragment>
  );
}

export default FilteredEventsPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      notFound: true,
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  const date = new Date(numYear, numMonth - 1);

  return {
    props: {
      events: filteredEvents,
      date,
    },
  };
}
