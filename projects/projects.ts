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
    url: "https://bearmaps-2020.herokuapp.com/",
    description: ["A web application that resembles the features of Google Map including rastering , routing(finding the shortest path), autocomplete searching and navigation direction functions.", "Implemented all the backend algorithms by Java with front end code and map data from OpenStreetMap provided as a base."],
    imagePaths: ["/images/projectImg/bearmaps1.jpeg", "/images/projectImg/bearmaps2.jpeg"],
    },
    {
    title: "SurfStore",
    skills: ["Go", "Raft Consensus Algorithm", "gRPC", "cloud-based"],
    url: "https://www.youtube.com/watch?v=VcJR44POXdM",
    description: ["Built a cloud-based file storage syncing service with versioning feature via gRPC that utilized Raft protocol to ensure the system consistency regardless of server failures by Go."],
    imagePaths: ["/images/projectImg/surfstore.png"],
    },
];