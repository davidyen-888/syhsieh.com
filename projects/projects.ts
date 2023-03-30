// Create object with the project name, skills, githubUrl, url, and description
// interface Props {
//     title: string;
//     skills: string[];
//     githubUrl: string;
//     url: string;
//     description: string[];
//     imagePath: string[];
//   }

export const projects = [{
    title: "WALARM-Design Project",
    skills: ["Figma"],
    url: "https://sites.google.com/ucsd.edu/walarm-final/",
    description: ["WALARM is an Apple Watch app designed for nurses and respiratory therapists in ICU settings.", "The app solves the problem of alarm fatigue, caused by excessive alarms and missed notifications.", "The solution involves push notifications through haptics, prioritized alarming, on-screen display, and speed messaging and calling.", "Haptics as a new sensory input can alleviate alarm fatigue, and prioritized alarming reduces cognitive load.", "On-screen display helps nurses to quickly identify the alarm, and speed messaging enables efficient communication with doctors."],
    imagePaths: ["/images/projectImg/walarm.png"],
    },
    {
    title: "BearMaps",
    skills: ["Java", "KDTree", "Priority Queue", "Trie", "A* Algorithm"],
    githubUrl: "https://github.com/davidyen-888/bearmaps",
    url: "https://www.youtube.com/watch?v=HWpYO5MP89I",
    description: ["A web application that resembles the features of Google Map including rastering , routing(finding the shortest path), autocomplete searching and navigation direction functions.", "Implemented all the backend algorithms by Java with front end code and map data from OpenStreetMap provided as a base."],
    imagePaths: ["/images/projectImg/bearmaps1.jpeg", "/images/projectImg/bearmaps2.jpeg"],
    },
    {
    title: "GoHTTP",
    skills: ["Go", "HTTP", "TCP", "Server"],
    githubUrl: "https://github.com/davidyen-888/GoHTTP",
    description: ["A simple HTTP/1.1 server implemented with Go that supports GET method, ponds with 200 OK, 400 Bad Request and 404 Not Found status codes and supports static file serving.", "The server can handle multiple concurrent requests and can handle multiple requests from the same client."],     
    imagePaths: ["/images/projectImg/gohttp1.png", "/images/projectImg/gohttp2.png"],
    },
    {
    title: "SurfStore",
    skills: ["Go", "Raft Consensus Algorithm", "gRPC", "cloud-based"],
    url: "https://www.youtube.com/watch?v=3fV4bLehm9o",
    description: ["A cloud-based file storage syncing service with versioning feature via gRPC that utilized Raft protocol to ensure the system consistency regardless of server failures by Go."],
    imagePaths: ["/images/projectImg/surfstore.png"],
    },
    {
    title: "Hash",
    skills: ["Haskell"],
    githubUrl: "https://github.com/tgujar/hash",
    url: "https://docs.google.com/presentation/d/1dGxcTg50EOtxHqT1pNXl0hmb7_3oZ6UOBvQm7Mznbug/edit?usp=sharing",
    description: ["A shell written in Haskell that supports features such as parsing/evaluating user-define program, predefined Linux program execution(cd, ls), persistent history storage and tab-based autocomplete."],
    imagePaths: ["/images/projectImg/hash.png"],
    },
    {
    title: "Stock Tracker",
    skills: ["React", "CSS", "BootStrap", "TypeScript", "Finnhub API", "Apexcharts API"],
    githubUrl: "https://github.com/davidyen-888/stock-tracker",
    url: "https://hello-stock-tracker.vercel.app/",
    description: ["A BootStrap styling stock tracking dashboard with features including add/remove stock list and price history chart with different time scale resolutions"],
    imagePaths: ["/images/projectImg/stocktracker1.png", "/images/projectImg/stocktracker2.png", "/images/projectImg/stocktracker3.png"],
    },
    {
    title: "Blur The Background",
    skills: ["JavaScript", "Canvas API", "HTML", "CSS", "TensorFlow.js"],
    githubUrl: "https://github.com/davidyen-888/blur-the-background",
    url: "https://davidyen-888.github.io/blur-the-background/",
    description: ["Built user background blur-effect in the real-time video processing by using the pre-trained Tensorflow.js models and drawing graphics with Canvas API in the static website."],
    imagePaths: ["/images/projectImg/blur.gif"],
    },
    {
    title: "Percolation",
    skills: ["Java", "Union-Find Algorithm", "Monte Carlo Simulation"],
    githubUrl: "https://github.com/davidyen-888/UCB-CS61B/tree/master/hw2",
    description: ["A percolation system model implemented with Disjoint Sets data structure and calculate Monte Carlo simulation to estimate the percolation threshold.", "With input files or mouse clicking, the visualizer can animates the results of opening sites in a percolation system."],
    imagePaths: ["/images/projectImg/percolation1.gif", "/images/projectImg/percolation2.gif", "/images/projectImg/percolation3.gif", "/images/projectImg/percolation4.gif", "/images/projectImg/percolation5.gif"],
    },
    {
    title: "PM 2.5 Detector",
    skills: ["Java", "Android Studio", "Arduino", "Blender", "3D Printing"],
    githubUrl: "https://github.com/davidyen-888/PM2.5-Detector",
    url: "https://www.youtube.com/watch?v=nG5KKAlwMCc&t=1s",    
    description: ["An Android application with intuitive UI design using Java and connected it with an Arduino sensor(PMS3003) by Bluetooth module that provides continuous update for air quality data syncing to mobile apps.", "Designed the sensor embedded air box model in Blender and constructed with 3D printing technique."],
    imagePaths: ["/images/projectImg/pm2.5.jpg"],
    },
    {
    title: "Weather Bot",
    skills: ["Python", "Discord API", "OpenWeatherMap API"],
    githubUrl: "https://github.com/davidyen-888/Discord-Weather-Bot",
    description: ["An online discord bot coded with Python and hosted on Heroku. Respond to user's concurrent weather, anytime, anywhere using OpenWeatherMap API."],
    imagePaths: ["/images/projectImg/weatherbot.gif"],
    },
];