import { useEffect, useState } from "react";
import { Route } from "../data/config";
export default function LastSalesPage() {
  const [sales, setSales] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nextjs-demo-8bed5-default-rtdb.firebaseio.com/sales.json`)
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
        console.log(newSales);
        setSales(newSales);
        setIsLoading(false);
      });
  }, []);

  if (loading) {
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

/* Notes:
- Sometimes fetching data on the client side is necessary, which can be done the standard way it would be done in React, by fetching the data in
a use effect hook.
*/
