import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import FormContainer from "./components/FormContainer";
import AboutPage from "./pages/AboutPage";
import FormPage from "./pages/FormPage";

import { Routes, Route } from "react-router-dom";

// this is our top level component in the component tree
//set up the routes in App
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route
          path="/top_5_mixtape_tunes"
          element={top5Data.map((top5) => (
            <div key={top5.id}>
              <FormContainer
                id={top5.id}
                username={top5.username}
                track_name={top5.track_name}
                artist_name={top5.artist_name}
                top_5_rank={top5.top_5_rank}
                user_track_story={top5.user_track_story}
              />
            </div>
          ))}
        />
      </Routes>
    </>
  );
}
