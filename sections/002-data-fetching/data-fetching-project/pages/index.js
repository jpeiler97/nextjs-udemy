import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/apiUtil";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.featuredEvents} />
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
