import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import MovieDetails from "./pages/MovieDetails";
import List from "./pages/List";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<MovieDetails />} />
        <Route path="/list" element={<List/>}/>
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
