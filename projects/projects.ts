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
    title: "BearMaps",
    skills: ["Java", "KDTree", "Priority Queue", "Trie", "A* Algorithm"],
    githubUrl: "https://github.com/davidyen-888/bearmaps",
    url: "https://www.youtube.com/watch?v=HWpYO5MP89I",
    description: ["A web application that resembles the features of Google Map including rastering , routing(finding the shortest path), autocomplete searching and navigation direction functions.", "Implemented all the backend algorithms by Java with front end code and map data from OpenStreetMap provided as a base."],
    imagePaths: ["/images/projectImg/bearmaps1.jpeg", "/images/projectImg/bearmaps2.jpeg"],
    },
    {
    title: "SurfStore",
    skills: ["Go", "Raft Consensus Algorithm", "gRPC", "cloud-based"],
    url: "https://www.youtube.com/watch?v=3fV4bLehm9o",
    description: ["A cloud-based file storage syncing service with versioning feature via gRPC that utilized Raft protocol to ensure the system consistency regardless of server failures by Go."],
    imagePaths: ["/images/projectImg/surfstore.png"],
    },
    {
    title: "Stock Tracker",
    skills: ["React", "CSS", "BootStrap", "TypeScript", "Finnhub API", "Apexcharts API"],
    githubUrl: "https://github.com/davidyen-888/stock-tracker",
    url: "https://hello-stock-tracker.vercel.app/",
    description: ["A BootStrap styling stock tracking dashboard with features including add/remove stock list and price history chart with different time scale resolutions"],
    imagePaths: ["/images/projectImg/stocktracker1.png", "/images/projectImg/stocktracker2.png"],
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