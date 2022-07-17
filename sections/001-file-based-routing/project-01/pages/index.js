import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

export default function StartingPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
