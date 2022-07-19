import path from "path";
import fs from "fs/promises";

export default function ProductDetail(props) {
  const { product } = props;
  return (
    <>
      <h1>{product.title}</h1>
      <h2>{product.description}</h2>
    </>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find(
    (product) => product.id === context.params.pid
  );

  //
  return {
    props: {
      product: product,
    },
    //After 10 seconds, re-generate data
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
    ],
    fallback: false,
  };
}

/* Notes: 
    - dynamic pages are generated just in time on the server, because Next simply does not know
    exactly what data will be fetched or passed into the query.
    -getStaticProps does not affect the default page '/' as it is always pregenerated. However, it does
    affect a dynamic route, because if a dynamic route is pregenerated without any data to generate it with,
    it will break. Dynamic pages need to know which query values will be available, besides data.
    - this can be fixed with getStaticPaths, which is another exported async function that Next is automatically
    aware of. 
*/
