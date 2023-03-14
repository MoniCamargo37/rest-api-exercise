require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Show = require('../models/Show');

// Import data to seed
  
const shows = [
  {
    title: "The Simpsons",
    creator: "Matt Groening",
    launched: 1989,
    genre: "comedy",
    image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
    description: "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition."
  },
  {
    title: "Friends",
    creator: "David Crane & Marta Kauffman",
    launched: 1994,
    genre: "comedy",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d4/Friends_Season_1_DVD_Set.jpg",
    description: "Friends is an American sitcom revolving around a group of friends living in Manhattan. The show follows the personal and professional lives of six friends: Rachel, Ross, Monica, Chandler, Joey, and Phoebe, as they navigate through various ups and downs in life, love, and career."
  },
  {
    title: "Game of Thrones",
    creator: "David Benioff & D.B. Weiss",
    launched: 2011,
    genre: "drama",
    image: "https://upload.wikimedia.org/wikipedia/en/9/93/Game_of_Thrones_Season_8.png",
    description: "Game of Thrones is an epic fantasy series set in the fictional continents of Westeros and Essos. It follows the political and military struggles among noble families vying for control of the Iron Throne. The series is known for its complex characters, intricate plotlines, and high production values."
  },
  {
    title: "Breaking Bad",
    creator: "Vince Gilligan",
    launched: 2008,
    genre: "crime",
    image: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
    description: "Breaking Bad is a critically acclaimed American television series that follows the transformation of Walter White, a high school chemistry teacher, into a ruthless drug lord. After being diagnosed with terminal lung cancer, Walter partners with his former student, Jesse Pinkman, to produce and distribute crystal meth, in a desperate attempt to secure his family's financial future."
  }
  
];

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(() => {
    return Show.deleteMany({});
  })
  .then(() => {
    return Show.create(shows);
  })
  .then((created) => {
    console.log(`Inserted ${created.length} shows into the database`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.connection.close();
  });