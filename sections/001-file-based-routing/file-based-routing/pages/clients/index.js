import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "jp", name: "JP" },
    { id: "bob", name: "Bob" },
  ];

  return (
    <div>
      <h1>Clients page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: "/clients/[clientid]",
                  query: { clientid: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* Notes:
    - This directory itself is named with the same convention as a dynamic path would ('[clientid]').
      This allows a dynamic path to also have a nested dynamic path attached to it. Inside this directory,
      there is another dynamic path '[projectid]', which allows Next.JS to render a complex set of paths.
      (e.g. 'https://[baseURL]/clients/jp/1'). This can be useful when there is multiple sets of data attached
      to a specific set of data, say, a viewable user with multiple viewable project pages.
    - The Link component can navigate to a nested dynamic path simply by passing in that nested path with its
    query as the href. E.g. to pass in 'jp' as the client id using Link, set the href to '/clients/jp'
    - an alternative to a string that Next.JS accepts for href is an object, which is structured as:
      {
        pathname: '/[directory name]/[ [dynamic route query name] ]',
        query: { [dynamic route query name]: [query] }
      }

      which in this file would be:
      {
        pathname: '/clients/[clientid]',
        query: { clientid: jp }
      }
*/
