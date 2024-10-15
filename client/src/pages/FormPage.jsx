import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [formValues, setFormValues] = useState({
    user_name: "",
    track_name: "",
    artist_name: "",
    top_5_rank: "",
    user_track_story: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log("These are my form values", JSON.stringify(formValues));
    fetch("http://localhost:8080/add_top_5-tunes", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(JSON.stringify({ formValues }));
  }

  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <div id="top_5_tunes_form_container">
        <h1>Post your Top 5 tunes for a mixtape!</h1>
        <p>
          We all know a music snob when we see and hear them. And this is where
          you can live out all of your music snobbery by posting your Top 5
          mixtape tunes. We also encourage posting a little background as to
          your choices.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="users_name"></label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Please share your name.."
            value={formValues.username}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <label htmlFor="track_name"></label>
          <input
            type="text"
            id="track_name"
            name="track_name"
            value={formValues.track_name}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <label htmlFor="artist_name"></label>
          <input
            type="text"
            id="artist_name"
            name="artist name"
            value={formValues.artist_name}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <label htmlFor="top_5_rank"></label>
          <input
            type="text"
            id="top_5_rank"
            name="top_5_rank"
            value={formValues.top_5_rank}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <div className="user_track_story">
            <label htmlFor="user_track-story"></label>
            <textarea
              rows={4}
              cols={40}
              type="text"
              id="user_track_story"
              name="user_track_story"
              placeholder="What's the story behind your track choice?"
              value={formValues.user_track_story}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
