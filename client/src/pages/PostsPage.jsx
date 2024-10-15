import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [formValues, setFormValues] = useState({
    username: "",
    track_name: "",
    artist_name: "",
    top_5_rank: "",
    user_track_story: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log("These are my form values", JSON.stringify(formValues));
    fetch("https:/localhost8080/add-review", {
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
      <div id="form-container">
        <h1>Submit a review!</h1>
        <p>
          Read a great book? Let us know all about it here and spread the word!
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="users_name"></label>
          <input
            type="text"
            id="users_name"
            name="users_name"
            placeholder="What's your name?"
            value={formValues.users_name}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <label htmlFor="book_name"></label>
          <input
            type="text"
            id="book_name"
            name="book_name"
            placeholder="Book title"
            value={formValues.book_name}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <label htmlFor="author"></label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            value={formValues.author}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <div className="review-container">
            <label htmlFor="review"></label>
            <textarea
              rows={4}
              cols={40}
              type="text"
              id="review"
              name="review"
              placeholder="Write your review"
              value={formValues.review}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <label htmlFor="rating"></label>
          <input
            type="number"
            id="rating"
            name="rating"
            placeholder="Rate this book (1-10)"
            value={formValues.rating}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

//here is where i need to fecth the endpoints from the server (GET endpoint) this gets the posts from the db

// export default function PostsPage(){
//we need useEffect to fetch the data - look at previous demo
//useEffect()
//need a function to fecthData(){
//fecth("url")
//parse the data into json
//console log my data - you can see what it looks like
//might have to wrangle data depending on what the data looks like from the user perspective
//once you have finished the app, and the deployment is ready replace the local host urls with the render urls
//}
//return (
//<>
//<h1>All my posts here </h1>
// render my posts here
// conditional rendering here too

//</>
//);
//}
