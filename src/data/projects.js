// projects.js
import asdvr1 from "/ASDVR_SS_PH.png";
import asdvr2 from "/ASDVR_SS_PH.png";
import asdvr3 from "/ASDVR_SS_PH.png";

// filter buttons on the home page, in this order; each project's `type` is one of these ids
export const projectTypes = [
    { id: "xr", label: "xr" },
    { id: "games", label: "games" },
    { id: "web", label: "web" },
];

// the home page grid follows this order: XR first, then games, then web
export const projects = {
    asdvr: {
        id: "asdvr",
        title: "ASDVR Application",
        type: "xr",
        // short role line shown on the card and the details page
        role: "Team project · sole software developer",
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
    questscan: {
        id: "questscan",
        title: "QuestScan",
        type: "xr",
        role: "Solo project",
        images: [],
        description: "Room scanning on a standalone Meta Quest 3: capture an interior with the headset, then walk " +
            "through it in VR as a textured 3D model or a Gaussian splat.\n" +
            "The Unity capture app records passthrough camera photos, Depth API frames and the Space Setup room " +
            "layout, and shows coverage live over passthrough: a GPU depth-fusion volume marks which surfaces have " +
            "been photographed from enough directions.\n" +
            "A Python pipeline built on COLMAP and OpenMVS turns the capture into a true-scale textured mesh, filling " +
            "plain walls and ceilings from the fused depth and room layout, or trains a Gaussian splat that can be " +
            "viewed in the Quest browser.\n" +
            "Built with Unity, C#, Meta XR SDK and MRUK, compute shaders, Python, COLMAP and OpenMVS.",
        // the repo is private, so no source link
        links: []
    },
    sensorydining: {
        id: "sensorydining",
        title: "Sensory Dining Plate",
        type: "xr",
        role: "Team project · wrist menu, 3D assets, scene work",
        images: [],
        description: "Research project: a mixed reality dining experience designed for elderly people.\n" +
            "My part: the in-app wrist menu; creating the table and chair for the outdoor scene; sourcing and " +
            "integrating other assets; and scene work on scene loading and render modes.",
        links: []
    },
    spacegame:{
        id: "spacegame",
        title: "SpaceGame (Starship Fenterprise)",
        type: "games",
        role: "Solo project",
        thumbnail: asdvr1,
        images: [asdvr1, asdvr2, asdvr3],
        description: "Arcade-style mobile game created with Unity and coded in C#.\n" +
            "Based on arcade games of yore.",
        links: []
    },
    pinball: {
        id: "pinball",
        title: "Pinball Game",
        type: "games",
        role: "Solo project",
        // no screenshots yet: an empty list shows a "screenshots coming soon" panel instead
        images: [],
        description: "3D pinball game for PC and mobile.\n" +
            "Solo project: designed and built by myself using Unity and Blender.",
        links: []
    },
    recipeme:{
        id: "recipeme",
        title: "RecipeMe",
        type: "web",
        role: "Solo project",
        thumbnail: asdvr1,
        images: [asdvr1, asdvr2, asdvr3],
        description: "Parsing recipe objects and displaying recipes in a user-friendly way.\n" +
            "Includes recipe search by name, country and category, and a hands-free cooking mode.\n" +
            "Built on TheMealDB's API (themealdb.com) using React, Vite and CSS.",
        links: [
            { label: "TheMealDB", url: "https://www.themealdb.com/" }
        ]
    }
};
