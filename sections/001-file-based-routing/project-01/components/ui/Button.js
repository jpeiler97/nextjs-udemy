import Link from "next/link";

import classes from "./button.module.css";

export default function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

/* Notes:
- In order to style next.js Link components, you must nest the children of the Link component inside an <a>
tag, then add the class to that <a> tag instead. The Link will still work as a normal Next.js would,
but the <a> tag is necessary for styling purposes.

*/
