export default function ClientProjectsPage() {
  return (
    <div>
      <h1>List of client projects</h1>
    </div>
  );
}

/* Notes:
  - This is just the base page for this dynamic path '[clientid]'. It would be treated the same as creating a file
    named '[clientid].js' on the same level as 'clients/index.js', but the difference here is now it can have another nested
    url path if need be. 
*/
