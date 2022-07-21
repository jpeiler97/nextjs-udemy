import path from "path";
import fs from "fs/promises";

export default function ProductDetail(props) {
  const { product } = props;

  if (!product) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <h1>{product.title}</h1>
      <h2>{product.description}</h2>
    </>
  );
}

export async function getStaticProps(context) {
  const data = await getData();

  const product = data.products.find(
    (product) => product.id === context.params.pid
  );

  // this plus fallback: true ensures to display a 404 page if the product doesn't exist
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product: product,
    },
    //After 10 seconds, re-generate data
    revalidate: 10,
  };
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticPaths() {
  //making call to getData to get list of paths to pregenerate
  const data = await getData();
  const ids = data.products.map((prod) => prod.id);

  const paths = ids.map((id) => {
    return { params: { pid: id } };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

/* Notes: 
    - dynamic pages are generated just in time on the server, because Next simply does not know
    exactly what data will be fetched or passed into the query.
    -getStaticProps does not affect the default page '/' as it is always pregenerated. However, it does
    affect a dynamic route, because if a dynamic route is pregenerated without any data to generate it with,
    it will break. Dynamic pages need to know which query values will be available, besides data.
    - this can be fixed with getStaticPaths, which is another exported async function that Next is automatically
    aware of. This will define the paths to pregenerate on build. When Next.JS pregenerates the pages it also
    keeps all possible instances of this dynamic page stored and ready to be loaded with data
    already loaded for them.
    - the fallback property return in getStaticPaths will determine if only the list of paths given should be
    pregenerated (false), or if paths not on the list should be generated just in time on loading of that 
    dynamic page (true).
    - If the fallback property is set to true, then the page will generate the page just in time, but if the
    user navigates to that page by typing it into the url, it will cause an error. This can be bypassed by
    returning a different component on the condition that the given props from that query haven't loaded yet. 
    - If the fallback property is set to "blocking", then no loading indicator is needed, the page will simply
    wait until the data is loaded before displaying.
*/
