import { useEffect, useState } from "react";
import { Route } from "../data/config";
import useSWR from "swr";

export default function LastSalesPage() {
  const [sales, setSales] = useState([]);
  //   const [loading, setIsLoading] = useState(true);

  const { data, error } = useSWR(
    "https://nextjs-demo-8bed5-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const newSales = [];
      for (const key in data) {
        newSales.push({
          key: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(newSales);
    }
  }, [data]);

  // OLD method of fetching data

  //   useEffect(() => {
  //     fetch(`https://nextjs-demo-8bed5-default-rtdb.firebaseio.com/sales.json`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const newSales = [];

  //         for (const key in data) {
  //           newSales.push({
  //             key: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }
  //         console.log(newSales);
  //         setSales(newSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!sales && !data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <ul>
      {sales.map((sale) => {
        return (
          <li key={sale.key}>
            {sale.username} {sale.volume}
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps(props) {
  return fetch(
    `https://nextjs-demo-8bed5-default-rtdb.firebaseio.com/sales.json`
  )
    .then((res) => res.json())
    .then((data) => {
      const newSales = [];

      for (const key in data) {
        newSales.push({
          key: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      return { props: { sales: transformedSales }, revalidate: 10 };
    });
}
/* Notes:
- Sometimes fetching data on the client side is necessary, which can be done the standard way it would be done in React, by fetching the data in
a use effect hook.

- a useful third-party hook is the useSWR hook, which at its core allows you to achieve data-fetching in a simpler way. Instead of implementing
your own logic to fetch in useEffect, simply pass in the url you'd like to get data from into useSWR, and deconstruct its returned object into
the values {data, error}, which can be treated the same as the response you'd get from using fetch().

-a note: in this lecture I had to add "(url) => fetch(url).then((res) => res.json())" as a second argument to useSWR in order to properly fetch the
data, otherwise there will be no data returned and oddly with no errors.

-client side and server side rendering can be used in unison. By making a call for the same data in both getStaticProps and the useSWR hook,
we can both ensure that data is pre-fetched to view in the source (getStaticProps), and also re-fetched when it is updated (useSWR)
*/
