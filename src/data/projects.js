// projects.js
import asdvr1 from "/ASDVR_SS_PH.png";
import asdvr2 from "/ASDVR_SS_PH.png";
import asdvr3 from "/ASDVR_SS_PH.png";

export const projects = {
    asdvr: {
        id: "asdvr",
        title: "ASDVR Application",
        thumbnail: asdvr1,
        images: [asdvr1, asdvr2, asdvr3],
        // optional: the id from a YouTube URL (watch?v=<id>), embedded on the details page
        youtubeId: "0lrz7CGEIQg",
        description: "VR application developed in collaboration with a psychology PhD student.\n" +
            "Developed using Unity, Visual Studio, Blender and Audacity, targeting the Meta Quest family of VR headsets.\n" +
            "All software design, interactions, coding, asset sourcing (including some of my own animation) " +
            "and voice-over work by myself.",
        // each link: { label: "GitHub", url: "https://..." }; shown on the card and the details page
        links: [
            { label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=0lrz7CGEIQg&list=PLZIxqPCwO_KfR7vQlYHblV19LgNNGHSS0" }
        ]
    },
    spacegame:{
        id: "spacegame",
        title: "SpaceGame (Starship Fenterprise)",
        thumbnail: asdvr1,
        images: [asdvr1, asdvr2, asdvr3],
        description: "Arcade-style mobile game created with Unity and coded in C#.\n" +
            "Based on arcade games of yore.",
        links: []
    },
    recipeme:{
        id: "recipeme",
        title: "RecipeMe",
        thumbnail: asdvr1,
        images: [asdvr1, asdvr2, asdvr3],
        description: "Parsing recipe objects and displaying recipes in a user-friendly way.\n" +
            "Includes recipe search by name, country and category, and a hands-free cooking mode.\n" +
            "Built on TheMealDB's API (themealdb.com) using React, Vite and CSS.",
        links: [
            { label: "TheMealDB", url: "https://www.themealdb.com/" }
        ]
    },
    pinball: {
        id: "pinball",
        title: "Pinball Game",
        // no screenshots yet: an empty list shows a "screenshots coming soon" panel instead
        images: [],
        description: "3D pinball game for PC and mobile.\n" +
            "Solo project: designed and built by myself using Unity and Blender.",
        links: []
    },
    sensorydining: {
        id: "sensorydining",
        title: "Sensory Dining Plate",
        images: [],
        description: "Research project: a mixed reality dining experience designed for elderly people.",
        links: []
    }
};
