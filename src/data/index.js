export const introText = {
    introduction: "Hello! I'm Aung.",
    text: "I'm a Computer Engineering student at the University of Waterloo. I'm also a 2021 Schulich Leader.",
    text2: "I've built web applications, mobile applications, games, and other software products. I've also dabbled in some hardware. I'm interseted in web development, artificial intelligence, educational technology, and space travel.",
    text3: "Feel free to contact me via Linkedin or email! I love meeting new people.",
    links: {
        "Linkedin":"https://www.linkedin.com/in/aung-khant-min/", 
        "Resume":"https://drive.google.com/file/d/19x0rIB2QNrE_ia48VuAUZsLBuPy2keyV/view", 
        "GitHub":"https://github.com/AungKMin", 
        "Devpost":"https://devpost.com/AungKMin", 
        "Email":"mailto:aungkhantmin2014@gmail.com",
    }
}

export const projectsArray = [
    {
        title: 'Surely Insured', 
        technologies: ['JavaScript', 'Python', 'React', 'Flask'],
        description: 'A tool for car insurance companies to leverage Geotab telematics and location data to make better data-driven insurance premium pricing decisions.', 
        points: [
            'Won the Geotab challenge at Hack the 6ix.', 
            'Worked in a team of four.', 
            "Used Google Maps Platform's Geocoding API and Maps JavaScript API to implement a dynamically repositioning map and to get longitude and latitude from an address input.",
        ], 
        links: {"Devpost": 'https://devpost.com/software/surely-insured', 'GitHub': 'https://github.com/AungKMin/insurance-map'},
        img: 'surelyInsured.png'
    },
    {
        title: 'Stock Tracker', 
        technologies: ['JavaScript', 'React', 'Express.js', 'MongoDB'],
        description: 'A convenient tool for busy investors to check critical technical data and tweets in seconds. Set a custom viewport with your desired stocks. Stock Tracker will bring your attention to outlier movements and important tweets.', 
        points: [
            'Won 2nd place in the FinTech category at Profitech (hackathon), working solo.', 
            'Fetched data from the Alpha Vantage API, Twitter API, and yahoo finance, dynamically parsing and displaying API data.',
            'Used Chart.js to graph the technical data fetched from APIs.'
        ], 
        links: {"Devpost": 'https://devpost.com/software/stock-tracker-9lo7c0', 'GitHub': 'https://github.com/AungKMin/stock-tracker-client', 'Link': 'https://stock-trackr.netlify.app/'},
        img: 'stockTracker.png'
    },
    {
        title: 'Productivity Organizer', 
        technologies: ['JavaScript', 'React', 'Express.js', 'MongoDB'],
        description: 'A web app that organizes notes and tasks using a unique social-media-style structure to better motivate the user and organize important data.', 
        points: [
            'Built the web app to serve as my personal organization tool.', 
            'Features include authentication, Google authentication, CRUD capability for notes, customizable tags for notes, search engine for notes, rich text editor implemented using Draft.js, and a "recommended notes" feature',
        ], 
        links: {"GitHub": 'https://github.com/AungKMin/productivity-organizer-client', 'Link': 'https://productivity-organizer.netlify.app'},
        img: 'productivityOrganizer.png'
    },
    {
        title: 'Network Manager', 
        technologies: ['Python', 'Django', 'PostgreSQL'],
        description: "A robust platform to easily manage your social network. Organize your contacts while you're cold contacting people for career opportunities or just maintaining a personal network.", 
        points: [
            'Submitted to ULHacks; worked solo.', 
            'Features include authentication, CRUD capability for contacts and contact methods, a search engine for contacts, and customizable categories for contacts and contact methods.',
        ], 
        links: {"Devpost": "https://devpost.com/software/network-manager", "GitHub": 'https://github.com/AungKMin/network-manager', 'Link': 'https://network-managr.herokuapp.com/'},
        img: 'networkManager.png'
    },
    {
        title: 'FastPres', 
        technologies: ['Python', 'Django'],
        description: "A tool to quickly create detailed PowerPoint files from just a text file. Insert images and different types of slides with a natural formatting language. Available as a website or python script.", 
        points: [
            'Submitted to XHacks; worked solo.', 
            'Used python-pptx to create the PowerPoint files.',
        ], 
        links: {"Devpost": "https://devpost.com/software/fastpres", "GitHub": 'https://github.com/AungKMin/FastPres', 'Link': 'https://presfast.netlify.app/'},
        img: 'fastPres.png'
    },
    {
        title: 'Pandemic Simulation', 
        technologies: ['Python', 'Numpy', 'Matplotlib'],
        description: "An animated simulation of a pandemic in a visual population. Adjust the epidemiology parameters or use the default preset Covid-19 parameters.", 
        points: [
            'Built simulation as a personal project to learn Matplotlib and Numpy.', 
            'Factored in adjustable epidemiology parameters and random variables to construct a dynamic simulation.',
            'Used the golden spiral technique to create the spiral graph.',
        ], 
        links: {"GitHub": 'https://github.com/AungKMin/pandemic-simulation'},
        img: 'pandemicSimulation.gif'
    },
    {
        title: 'Othello/Reversi Game', 
        technologies: ['Python', 'Numpy', 'Matplotlib'],
        description: "An implementation of the Reversi/Othello game with a difficulty adjustable computer AI player as a supported play mode. UI has a Rick and Morty theme.", 
        points: [
            'Implemented game logic and human-vs-human functionality as a school project; added computer AI player as a personal project.', 
            'Implemented computer AI player using minimax algorithm with alpha-beta pruning.',
        ], 
        links: {"GitHub": 'https://github.com/AungKMin/rick-and-morty-othello'},
        img: 'othello.png'
    },
    {
        title: 'Arcade Game Store', 
        technologies: ['Turing'],
        description: "An arcade game shop with a simulated e-commerce purchase system and four playable games: Snake, Space Shooter clone, and two custom platformers.", 
        points: [
            'Implemented simulated e-commerce purchase system as a school project; added playable games as a personal project.', 
            'Built the four games from scratch using a game loop and custom graphics.',
            'Implemented credit card verification.',
        ], 
        links: {"GitHub": 'https://github.com/AungKMin/turing-arcade-shop-with-games'},
        img: 'arcadeGameStore.png'
    },
    {
        title: 'Caesar Cipher Encoder and Decoder', 
        technologies: ['Python', 'Kivy'],
        description: "A GUI application that encodes and decodes Caesar Cipher. If the decode shift is not given, the application will intelligently find the decode shift.", 
        points: [
            'Built the application as a personal project to learn Python and Kivy.', 
            'If the decode shift is not provided, the application intelligently finds the decode shift that results in the highest number of valid words using a word database.',
        ], 
        links: {"GitHub": 'https://github.com/AungKMin/caesar-cipher'},
        img: 'caesarCipher.png'
    },
    {
        title: '2-player Reaction Time Browser Game', 
        technologies: ['JavaScript'],
        description: "A simple 2-player reaction time game that uses JavaScript's built-in asynchronous functions.", 
        points: [
            "Built the game as a personal project to practice using JavaScript's built-in asynchronous functions.", 
        ], 
        links: {"GitHub": 'https://github.com/AungKMin/2-player-reaction-browser-game'},
        img: 'reactionBrowserGame.png'
    },
]