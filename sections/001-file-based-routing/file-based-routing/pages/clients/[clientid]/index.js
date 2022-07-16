import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    //blah
    router.push({
      pathname: "/clients/[clientid]/[projectid]",
      query: { clientid: "jp", projectid: "1" },
    });
  }

  return (
    <div>
      <h1>List of client projects</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

/* Notes:
  - This is just the base page for this dynamic path '[clientid]'. It would be treated the same as creating a file
    named '[clientid].js' on the same level as 'clients/index.js', but the difference here is now it can have another nested
    url path if need be. 

  - Programatic routing can be achieved through router.push(), which accepts a url or an object (see clients/index.js)
    and will navigate to the pathname like a typical Link component would.
*/
