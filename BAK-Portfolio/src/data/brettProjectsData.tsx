//NEED AN ID FOR THE MODAL????

export const brettProjects = [
  {
    name: 'Vinyl Viewer',
    abstract: `Vinyl Viewer is a TypeScript/React application designed to emulate the record-collecting experience. A user can search for an artist, browse an artist's albums, and view information on each album. Users can then select an album to see more details and choose to save it to their virtual "collection." From the user's collection view, albums can be viewed, filtered by artist or album name, or removed from the collection. The project also includes a Cypress acceptance test suite. For this project, our fully-remote team of four was tasked with self-teaching and using TypeScript to collaborate on a React application in one week. After coming up with a concept and finding Last.fm's Music Discovery API, we designed the component architecture and UI wireframe by implementing user stories. One of the main experiences we focused on was virtually recreating the feeling of flipping through records at a record store.`,
    tech: ['typescript', 'react', 'sass', 'react router', 'cypress', 'html', 'postman', 'github project board'],
    githubURL: 'https://github.com/bkuhn2/Vinyl_Viewer',
    deployedURL: 'https://vinylviewer.netlify.app/',
    img: 'https://i.imgur.com/IQGHqtY.png',
    notes: '',
    id: 0
  },
  {
    name: 'Cocktail Evening',
    abstract: `Cocktail Evening is a React application that helps users plan parties by searching and choosing which cocktails they'll want to serve. Designed for a user that appreciates a streamlined UI/UX and making cocktails, potential users can search for cocktails either by their name or by the ingredients in them (i.e., a "vesper", or cocktails that have "gin" or "bitters"). Clicking on an individual cocktail in the search results will show more detailed info and can then add it to the offering for their event. Users can also navigate to their event page to see their offering, with the ability to remove cocktails from this as well. This app uses the CocktailDB API and uses Cypress testing to ensure bug free functionality.`,
    tech: ['react', 'react router', 'cypress', 'html', 'css', 'javascript', 'github project board'],
    githubURL: 'https://github.com/bkuhn2/Cocktail_Evening',
    deployedURL: 'https://cocktailevening.netlify.app/',
    img: 'https://i.imgur.com/wGr40kW.png',
    notes: '',
    id: 1
  },
  {
    name: 'Board Together',
    abstract: `Board Together is a board game platform that allows users to create their own profiles and list their favorite board games. It utilizes a React FrontEnd and GraphQL & PostgreSQL Backend to create a seamless user experience and features API calls to the popular Board Game Atlas API to provide up-to-date information about various board games. With this platform, board game enthusiasts can keep track of their collection, discover new games to play, and connect with others to share the games they have collected. The platform is easy to use and accessible to anyone who loves board games or wants to learn more about them.`,
    tech: ['react', 'react router', 'cypress', 'html', 'css', 'javascript', 'apollo client', 'graphql', 'circleci', 'github project board'],
    githubURL: 'https://github.com/board-together',
    deployedURL: 'https://board-together.surge.sh/',
    img: 'https://i.imgur.com/ovXqlCj.jpg',
    notes: 'Currently undergoing maintenance.',
    id: 2
  },
  {
    name: 'Overlook',
    abstract: `This app simulates a hotel website where a customer can log-in and see their past and upcoming trips they've booked, as well as booking a new trip on a date they specify and seeing how much they've spent at the hotel so far. The user can also filter their search results by room type. It was created as an assignment at Turing School of Software and Design. Once you log-in, you will embody a fabricated "customer" and use the app as they would. This project also was built using a mocha/chai test suite to ensure bug-free functionality.`,
    tech: ['html', 'css', 'javascript', 'mocha', 'chai', 'lighthouse'],
    githubURL: 'https://github.com/bkuhn2/Overlook-Solo-Project',
    deployedURL: '',
    img: 'https://i.imgur.com/A1erNpp.png',
    notes: '',
    id: 3
  },
  {
    name: 'Round Up',
    abstract: `Round Up is a React application that curates a list of 'lifestyle' articles from the New York Times and provides more details about each article, as well as an external link to the article itself. It features a streamlined but user-friendly UI/UX that is responsive across all screen sizes and is designed for a user that wants to peruse the travel, sports and arts sections of the paper specifically. When a user opens the app, they will see a list of articles they can browse, and can filter by category if the want to browse a specific section. When the user clicks on an article in the list, they will see the article details and external link. Created as a 'take-home' challenge in an 8 hour sprint.`,
    tech: ['react', 'react router', 'html', 'css', 'javascript', 'github project board'],
    githubURL: 'https://github.com/bkuhn2/roundup',
    deployedURL: 'https://roundup-takehome.netlify.app/',
    img: 'https://i.imgur.com/Zr7EJiK.png',
    notes: '',
    id: 4
  },
  {
    name: 'Neatflix',
    abstract: `Neatflix is a movie review web application that pulls in data from a movie API and displays the results to the user. The target user ranges from cinephile to casual movie watcher wanting to find a movie to watch based on its ratings and reviews. The user flow first shows all movies on the main page, where the user may search for a specific title. Once that title is found, the movie poster can be clicked on to view more details about the film, including rating, budget, release date, and the option to view the trailer. This paired project was created as the first React project of the Turing front-end software engineering program.`,
    tech: ['react', 'react router', 'cypress', 'html', 'css', 'javascript', 'github project board'],
    githubURL: 'https://github.com/bkuhn2/Neatflix',
    deployedURL: '',
    img: 'https://i.imgur.com/Vdxym81.jpg',
    notes: '',
    id: 5
  },
  {
    name: `Rock, Paper, Scissors`,
    abstract: `This app lets users play a game of rock, paper, scissors against an automated computer opponent, and includes both the traditional 3 item game and a more complex 5 item game (with a Halloween theme to fit the fall season in which it was made). On page load, the user enters their name and can choose an emoji "token" to accompany it, and then at the home page the user chooses which game mode to play and is taken to that page. The player then selects their "fighter" (the computer simultaneously selects its), and a 'fight' button appears. Upon clicking, the results are displayed and the user is notified of the winner, and will see their (or the computer's) win tallied on the left/right-hand side of the page, respectively. The page automatically resets back to the game board.`,
    tech: ['html', 'css', 'javascript', 'mocha', 'chai'],
    githubURL: 'https://github.com/bkuhn2/Rock_Paper_Scissors',
    deployedURL: 'https://bkuhn2.github.io/Rock_Paper_Scissors/',
    img: 'https://i.imgur.com/8qISgEc.png',
    notes: '',
    id: 6
  },
  {
    name: `What's Cookin' Good Lookin'`,
    abstract: `This app offers users unique recipes and cooking instructions, as well as the ability to search for recipes, save them to their queue, and also features a pantry of specific ingredients that tells you whether or not you can cook your recipes. Created as a part of an agile two week sprint in a four person group.`,
    tech: ['html', 'css', 'javascript', 'github project board', 'mocha', 'chai', 'lighthouse'],
    githubURL: 'https://github.com/bkuhn2/whats-cookin-good-lookin',
    deployedURL: '',
    img: 'https://i.imgur.com/Ry9VEmD.png',
    notes: '',
    id: 7
  },

];