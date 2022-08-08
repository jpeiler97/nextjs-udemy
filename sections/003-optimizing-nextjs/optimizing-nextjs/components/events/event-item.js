import Image from "next/image";

import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      //Width and height is required, not setting the orig w/h of the files,
      //just the w/h of the image to be fetched.
      <Image src={"/" + image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

/* Notes:
  - With the Image component imported from 'next/image', Next will create multiple versions of an image on the fly
  when requests are coming in, optimized for the OS and device size making the request. The generated images will then
  be cached for future requests on similar devices.
  - Width and height are required attributes on the Image component.
  - Ways that Next optimizes images with the Image component: smaller file size; fetched as a certain type based on
  the browser (e.g. webp in chrome); quality is reduced without affecting the image;
  - A large optimization performed by Next with the Image component is lazy-loading- the image will not be loaded and
  displayed until it is within view.
  - Generated cached images will be stored and found in /.next/cache/images
*/
