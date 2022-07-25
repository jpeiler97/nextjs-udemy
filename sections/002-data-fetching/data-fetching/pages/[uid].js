export default function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      id: "userid-" + userId,
    },
  };
}

/* Notes:
    - in this dynamic path case vs. the product id page, we don't use getStaticPaths because getServerSideProps
    is ran with every request, and pre-generation doesn't occur, so there's no use in defining the dynamic 
    paths available to pre-generate.

*/
