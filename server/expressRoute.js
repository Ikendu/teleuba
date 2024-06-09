// this is where all our express routes and related stuffs are done
const app = require("./server").app;
const jwt = require("jsonwebtoken");

const linkSecret = "fjduir3940@%kdfj,mxnruro";

// this route is for us: in Production
// would send this out, we will print it out and pest it in, It will drop
// us in our React site with the right info for client to make an offer
app.get("/", (req, res) => {
  // data for the end-user's appt
  const apptData = {
    professionalsFullName: "Mr. Chibundu Aniede",
    apptDate: Date.now(),
  };

  // We need to encode this data in a token
  const token = jwt.sign(apptData, linkSecret);

  res.send(`https://localhost:5173/join-video?token=${token}`);
  // res.send(token);

  // res.json("Testing of app");
});

app.post("/validate-link", (req, res) => {
  // const { token } = req.query; //get the token from link request

  // get the token from the body of the post request (thanks express.json())
  const { token } = req.body;
  //decode the token with our secret
  const decodedToken = jwt.verify(token, linkSecret);
  // send the decoded data {our object} back to the front-end
  res.json(decodedToken);
});
