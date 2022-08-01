import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import { getAllEvents } from "../helpers/apiUtil";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  let events = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: events,
    },
  };
}
