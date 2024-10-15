import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* make sure the path in the to property matches the path in the Route
      component you are trying to connect to */}
      <Link to=" /">ABOUT</Link>
      <br />
      <Link to="/form">POST YOUR TOP TUNES</Link>
      <br />
      <Link to="/top5tunes">TOP 5 TUNES</Link>
    </>
  );
}
