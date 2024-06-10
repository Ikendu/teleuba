import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import MainVideoPage from "./videoComponent/MainVideoPage";
import socketServer from "./webRTCUtilities/sockerConnection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Home} />
        <Route path="/join-video" Component={MainVideoPage} />
        <Route path="example" element={<ExamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h1>Teleuba</h1>
    <h3>we are here for you at all times</h3>
    <p>You can always reach out to us</p>
    <h3>
      Click <Link to={"/join-video"}>here</Link> to visit the appointment and
      conversation page
    </h3>
    <h4>Thank you for coming around</h4>
  </div>
);
const ExamplePage = () => (
  <div>
    <h1>My ExamplePage Component</h1>
    <p>testing out changes</p>
  </div>
);
export default App;
