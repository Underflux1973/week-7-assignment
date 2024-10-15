// import the packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
// set up the packages
// set up configs
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
// set up db pool with connection string from .env
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({ connectionString: dbConnectionString });

// set up a port and listen to it
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
app.get("/", (req, res) => {
  res.json({
    message: "THIS IS WHERE ALL THE MUSIC SNOBS ARE!",
  });
}); // endpoint for rout route

// I have tried so hard to retrieve data from my Supabase database and it just hasn't worked.  The only result I did get when testing the GET through thunderclient was "success : false" - but this was only after I added the code for the console error message. I have made sure my naming conventions are correct and the async and await commands are in the right place.  There appear to be no syntax errors so I am well and truly lost as tow what to do here.
app.get("/top_5-mixtape_tunes", async (req, res) => {
  try {
    const top5MixtapeTunesData = await db.query(
      `SELECT username, track_name, artist_name, top_5_rank, user_track_story FROM top_5_mixtape_tunes`
    );
    console.log(top5MixtapeTunesData);
    res.status(200).json(top5MixtapeTunesData.rows);
  } catch (error) {
    console.error("This is an error!", error);
    res.status(500).json({ success: false });
  }
});
app.post("/add-top-5-tune", async (req, res) => {
  try {
    const { username, track_name, artist_name, top_5_rank, user_track_story } =
      req.body;
    const newReview = await db.query(
      `INSERT INTO top_5_mixtape_tunes (users_name, book_name, author, review, rating)
          VALUES ($1, $2, $3, $4, $5);`,
      [username, track_name, artist_name, top_5_rank, user_track_story]
    );
    res.status(200).json(newTop5Tune.rows);
  } catch (error) {
    console.error("This is an error!", error);
    res.status(500).json({ success: false });
  }
});
