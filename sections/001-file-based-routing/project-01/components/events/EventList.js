import EventItem from "./EventItem";
import classes from "./event-list.module.css";

export default function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((item) => {
        return (
          <EventItem
            key={item.id}
            id={item.id}
            title={item.title}
            location={item.location}
            date={item.date}
            image={item.image}
          />
        );
      })}
    </ul>
  );
}
