export default function UserProfilePage(props) {
  return <h1>props.username</h1>;
}

export async function getServerSideProps(context) {
  const data = await getData();

  const product = data.products.find(
    (product) => product.id === context.params.pid
  );

  if (!product) {
    return { notFound: true };
  }
  //no need to revalidate, getServerSideProps will always run on a new request
  return {
    props: {
      username: "JP",
    },
  };
}

/* Notes:
  - getServerSideProps will run on any new request to the server, vs. getStaticProps which runs after
    a given time (revalidate: X). It can access the full request or response object which is available 
    in the context object along with the typical accesible properties and some new ones.
  - This is useful for something like this case of this example, where we only want to access a page
    for the user stored in cookies. We can use the context in getServerSideProps to access cookies from
    the headers and ensure it is the proper user being displayed.

*/
