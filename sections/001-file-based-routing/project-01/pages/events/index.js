import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";

export default function Events() {
  const events = getAllEvents();
  const router = useRouter();
  function handleSearch(year, month) {
    router.push(`/events/${year}/${month}`);
  }
  return (
    <div>
      <EventsSearch handleSearch={handleSearch} />
      <EventList items={events} />
    </div>
  );
}
