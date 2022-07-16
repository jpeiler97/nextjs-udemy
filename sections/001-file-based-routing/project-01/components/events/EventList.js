import EventItem from "./EventItem";

export default function EventList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <EventItem />;
      })}
    </ul>
  );
}
