import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import socketServer from "./utilities/socketServer";
import MainVideoPage from "./videoComponent/MainVideoPage";

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
    <h1>My Home Component</h1>
    <p>testing out changes</p>
  </div>
);
const ExamplePage = () => (
  <div>
    <h1>My ExamplePage Component</h1>
    <p>testing out changes</p>
  </div>
);
export default App;
