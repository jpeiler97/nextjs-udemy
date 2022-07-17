import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
export default function FilteredEvents() {
  const router = useRouter();
  const query = router.query.slug;
  console.log(query);
  if (!query) {
    return <p className="center">Loading...</p>;
  }
  const year = +query[0];
  const month = +query[1];
  const events = getFilteredEvents({ year, month });

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
