import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Video from "./pages/Video/Video";
import Error from "./pages/Error/Error";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [user, setUser] = useState({
    firstName: "Tarik",
    lastName: "Kukuljac",
    username: "tar33k",
  });

  return (
    <div>
      <Navbar setSidebar={setSidebar} user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
