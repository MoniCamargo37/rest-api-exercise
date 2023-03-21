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
    image: "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/35/63/27/18614801.jpg",
    description: "Friends is an American sitcom revolving around a group of friends living in Manhattan. The show follows the personal and professional lives of six friends: Rachel, Ross, Monica, Chandler, Joey, and Phoebe, as they navigate through various ups and downs in life, love, and career."
  },
  {
    title: "Game of Thrones",
    creator: "David Benioff & D.B. Weiss",
    launched: 2011,
    genre: "drama",
    image: "https://super-ficcion.com/wp-content/uploads/2021/03/VN5VKR2DFBDJVNMLZAF7EESSHY.jpg",
    description: "Game of Thrones is an epic fantasy series set in the fictional continents of Westeros and Essos. It follows the political and military struggles among noble families vying for control of the Iron Throne. The series is known for its complex characters, intricate plotlines, and high production values."
  },
  {
    title: "Breaking Bad",
    creator: "Vince Gilligan",
    launched: 2008,
    genre: "crime",
    image: "https://cinefilosfrustrados.com/wp-content/uploads/2018/11/portada-breaking-bad.jpg",
    description: "Breaking Bad is a critically acclaimed American television series that follows the transformation of Walter White, a high school chemistry teacher, into a ruthless drug lord. After being diagnosed with terminal lung cancer, Walter partners with his former student, Jesse Pinkman, to produce and distribute crystal meth, in a desperate attempt to secure his family's financial future."
  },
  {
    title: "Ozark",
    creator: "Bill Dubuque, Mark Williams",
    launched: 2017,
    genre: "crime drama",
    image: "https://i.blogs.es/8c1b78/ozark/1366_2000.jpg",
    description: "Ozark is a Netflix original crime drama series that follows Marty Byrde, a financial planner who relocates his family from Chicago to the Missouri Ozarks. With the help of his wife Wendy and their two children, Marty must navigate the treacherous waters of the criminal underworld as he works to pay off a debt to a Mexican drug lord."
  },

  {
    title: "Peaky Blinders",
    creator: "Steven Knight",
    launched: 2013,
    genre: "period drama",
    image: "https://www.rionegro.com.ar/wp-content/uploads/2022/06/foto-ppal-Peaky-Blinders.jpg?w=920&h=517&crop=1",
    description: "Peaky Blinders is a British period drama set in the early 20th century, following the lives of the Shelby family, a notorious gang from Birmingham. The series follows Tommy Shelby, the leader of the gang, as he attempts to expand their power and influence, while also trying to keep his family together and protect them from their enemies."
  },

  {
    title: "YOU",
    creator: "Sera Gamble, Greg Berlanti",
    launched: 2018,
    genre: "psychological thriller",
    image: "https://www.metroworldnews.com/resizer/UueW0X1vyccCRr2mqsWljke9RAo=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/2HYYIMJQF5GKPIZ45TBVLMYSJA.jpg",
    description: "YOU is an American psychological thriller series that follows Joe Goldberg, a bookstore manager who becomes obsessed with a woman he meets, and then begins to stalk her. As his obsession intensifies, Joe will go to extreme lengths to keep her in his life and protect her from harm, even if it means putting her in danger from his own actions."
  },

  {
    title: "1889",
    creator: "Eric Kripke",
    launched: 2020,
    genre: "horror",
    image: "https://img.static-rmg.be/a/view/q75/w1200/h627/4831880/1899-photo-1455746-large-jpg.jpg",
    description: "1889 is a Netflix original horror series set in Victorian London. The series follows the survivors of a plague that has wiped out most of the city's population, and follows them as they attempt to survive in a world overrun by the undead. With the help of a mysterious stranger, the survivors must fight their way through the city and try to find a way to survive."
  },

  {
    title: "The Last of Us",
    creator: "Naughty Dog",
    launched: 2013,
    genre: "action-adventure",
    image: "https://www.techadvisor.com/wp-content/uploads/2023/01/last-of-us.webp?resize=1024%2C576&quality=50&strip=all",
    description: "The Last of Us is an action-adventure video game developed by Naughty Dog. Set in a post-apocalyptic United States overrun by a mutant strain of the Cordyceps fungus, the game follows Joel and Ellie as they travel across the country in an attempt to survive. Along the way, they must face the dangers of the infected, as well as other survivors, in order to make it to their destination alive."
  },

  {
    title: "The Witcher",
    creator: "Andrzej Sapkowski",
    launched: 2007,
    genre: "fantasy",
    image: "https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2022/04/the-witcher-temporada-3.jpg",
    description: "The Witcher is a fantasy series based on the novels by Andrzej Sapkowski. The series follows Geralt of Rivia, a monster hunter known as a Witcher, as he travels through a medieval world filled with monsters and mystical creatures. Along the way, he must battle the forces of evil and protect innocent people from harm."
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