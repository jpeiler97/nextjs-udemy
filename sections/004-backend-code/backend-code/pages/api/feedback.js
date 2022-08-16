import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      feedback: feedback,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = JSON.parse(fs.readFileSync(filePath));
    const allData = [...fileData, newFeedback];
    fs.writeFileSync(filePath, JSON.stringify(allData));

    res.status(200).json({ message: "success!", feedback: newFeedback });
  }
}

export default handler;

/* Notes:
    - Next.JS looks a folder named "api" in the pages directory, and uses files created in that folder as
    endpoints. That is, the handler in this file called 'feedback.js' will be executed when a request
    for 'api/handler' is made.
    - Any code in the handler function will never be exposed to the client. It is simply handled on the server.
*/
