// this is where all our express routes and related stuffs are done
const app = require("./server").app;
const jwt = require("jsonwebtoken");

const linkSecret = "fjduir3940@%kdfj,mxnruro";

// this route is for us: in Production
// would send this out, we will print it out and pest it in, It will drop
// us in our React site with the right info for client to make an offer
app.get("/user-link", (req, res) => {
  // data for the end-user's appt
  const apptData = {
    proffesionalFullName: "Mr. Chibundu Aniede",
    data: Date.now(),
  };

  // We need to encode this data in a token
  const token = jwt.sign(apptData, linkSecret);

  res.send(`https://localhost:5173/join-video?token=${token}`);
  // res.send(token);

  // res.json("Testing of app");
});

app.post("/validate-link", (req, res) => {
  // const { token } = req.query; //get the token from link request
  const { token } = req.body;
  const decodedToken = jwt.verify(token, linkSecret);

  res.json({ decoded: decodedToken });
});
