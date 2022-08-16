function handler(req, res) {
  res.status(200).json({ message: "This works!" });
}

export default handler;

/* Notes:
    - Next.JS looks a folder named "api" in the pages directory, and uses files created in that folder as
    endpoints. That is, the handler in this file called 'feedback.js' will be executed when a request
    for 'api/handler' is made.
    - Any code in the handler function will never be exposed to the client. It is simply handled on the server.
*/
