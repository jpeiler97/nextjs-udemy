import path from "path";
import fs from "fs/promises";

export default function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </ul>
  );
}

//Executed on pre-render, then passes props in returned object to HomePage
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    //After 10 seconds, re-generate data
    revalidate: 10,
  };
}

/* Notes:

- When async function getStaticProps() is exported from a page file, Next will see it and understand it
as a signal to do whatever is inside the function, BEFORE the page is pre-generated. On top of this, if
the default setting to pre-generate all pages is off, and this file exports getStaticProps(), Next will
continue to pre-generate the page.
- The function must always return an object with at least the 'props' key, but whatever data is passed
in may be anything.
- The function must be exported/written as export async function getStaticProps() in order for Next to
detect it.

- getStaticProps() executes on build, but using ISR, a page may be set to regenerate on every request
at most every X seconds. At X seconds, Next will generate, store (cache) and serve the newly generated page.

- This doesn't mean necessarily that new data gets served to the page instantly after X seconds (something
  that's normally achieved through another technology like web sockets.) It means that after X seconds,
  a new regenerated page with updated data will be ready to be shown when the user refreshes.

- note- in dev, Next will *always* regenerate for any request regardless of the revalidate property 
  in getStaticProps

  -ISR => Incremental Static Regeneration

  - getStaticProps() runs ON the server. It never runs on the client.
*/
