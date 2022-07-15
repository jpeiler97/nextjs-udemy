export default function ClientsPage() {
  return (
    <div>
      <h1>Clients page</h1>
    </div>
  );
}

/* Notes:
    - This directory itself is named with the same convention as a dynamic path would ('[clientid]').
      This allows a dynamic path to also have a nested dynamic path attached to it. Inside this directory,
      there is another dynamic path '[projectid]', which allows Next.JS to render a complex set of paths.
      (e.g. 'https://[baseURL]/clients/jp/1'). This can be useful when there is multiple sets of data attached
      to a specific set of data, say, a viewable user with multiple viewable project pages.
*/
