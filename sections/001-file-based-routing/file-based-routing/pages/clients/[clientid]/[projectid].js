import { useRouter } from "next/router";

export default function ClientProjectPage() {
  const router = useRouter();
  const query = router.query;
  return (
    <div>
      <h1>
        Client project {query.clientid} {query.projectid}
      </h1>
    </div>
  );
}

/*  Notes:
  - This is the nested path that gets rendered not just when a client id is given in the url,
    but a project id as well. A user would navigate to this through, for example,
    'https://[baseURL]/clients/jp/1', jp being the client id, and 1 being the project id.

*/
