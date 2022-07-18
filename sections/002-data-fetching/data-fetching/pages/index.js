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

export async function getStaticProps() {
  return {
    props: {
      products: [{ id: "p1", title: "Product1" }],
    },
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

*/
