// projects.js
import asdvr1 from "/asdvr/asdvr-1.webp";
import asdvr2 from "/asdvr/asdvr-2.webp";
import asdvr3 from "/asdvr/asdvr-3.webp";
import asdvr4 from "/asdvr/asdvr-4.webp";
import asdvr5 from "/asdvr/asdvr-5.webp";
import asdvr6 from "/asdvr/asdvr-6.webp";
import recipme1 from "/recipme/recipme-1.webp";
import recipme2 from "/recipme/recipme-2.webp";
import recipme3 from "/recipme/recipme-3.webp";
import spacegameTitle from "/spacegame/title-screen.webp";
import spacegameGameplay from "/spacegame/gameplay.webp";
import spacegameLevelUp from "/spacegame/level-up.webp";
import spacegameEditor from "/spacegame/level-editor.webp";
import spacegameWorld from "/spacegame/world-editor.webp";

// filter buttons on the home page, in this order; each project's `type` is one of these ids
export const projectTypes = [
    { id: "xr", label: "xr" },
    { id: "games", label: "games" },
    { id: "web", label: "web" },
];

// the home page grid follows this order: Recipme and Starship Fenterprise first, then the rest
export const projects = {
    recipeme:{
        id: "recipeme",
        title: "Recipme",
        type: "web",
        role: "Solo project",
        thumbnail: recipme1,
        images: [recipme1, recipme2, recipme3],
        description: "I started designing a personal recipe database, then I wanted a better way to display " +
            "recipes. Adding a meal planner, shopping list and pantry, and we have a cosy little environment.\n" +
            "Now live in beta. Built for phones first and installs like an app (works offline too).\n" +
            "Cooking mode goes through a recipe one step at a time with big text, timers and hands-free voice " +
            "control (say next, back, repeat or ingredients), and keeps the screen on while you cook.\n" +
            "Recipes can be imported from websites, PDFs and photos, and show names and measures for Australia " +
            "or the US.\n" +
            "Built with React, Vite and Tailwind CSS, with Supabase (Postgres, sign-in and edge functions) " +
            "behind it, hosted on Cloudflare Pages.",
        links: [
            { label: "Live site (beta)", url: "https://recipme.pages.dev/" }
        ]
    },
    spacegame:{
        id: "spacegame",
        title: "Starship Fenterprise",
        type: "games",
        role: "Solo project",
        thumbnail: spacegameTitle,
        images: [spacegameTitle, spacegameGameplay, spacegameLevelUp, spacegameEditor, spacegameWorld],
        description: "Vertical shooter for Android phones, made in Unity and C#. Started as a nod to the arcade " +
            "games of yore, now turning into a roguelite where every run is different.\n" +
            "Each run is generated from a seed (shown as a six-character code on the title screen), so the same " +
            "seed always gives the same levels. Three ships, eight weapons, enemy waves flying along spline " +
            "paths, two bosses, and loot, new guns and level-ups along the way.\n" +
            "Levels are built in my own Unity level editor: sections of enemy waves, each following a path " +
            "that can be mirrored and offset, previewed in the scene view, plus an optional boss.\n" +
            "A world editor lays those levels out as a path that can fork into branches, and shows the save's " +
            "progress along it. Wave paths can also be drawn straight on the phone in an in-game editor.",
        links: []
    },
    asdvr: {
        id: "asdvr",
        title: "ASDVR Application",
        type: "xr",
        // short role line shown on the card and the details page
        role: "Team project · sole software developer",
        thumbnail: asdvr1,
        images: [asdvr1, asdvr2, asdvr3, asdvr4, asdvr5, asdvr6],
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
    pinball: {
        id: "pinball",
        title: "Pinball Game",
        type: "games",
        role: "Solo project",
        // no screenshots yet: an empty list shows a "screenshots coming soon" panel instead
        images: [],
        description: "3D pinball for phones, played in portrait, made in Unity and C#. Two tables so far, " +
            "Anaconda: Queen of the Amazon and Breakfast Time.\n" +
            "Real table parts throughout (flippers, an analogue plunger, pop bumpers, slingshots, drop and standup " +
            "targets, spinners, ramps and diverters, a captive ball, multiball and a tilt meter), and you can nudge " +
            "the table by shaking the phone.\n" +
            "The first table has six missions leading up to a wizard mode, scores show on a dot-matrix display, " +
            "and practice lessons teach the flipper skills.\n" +
            "Tables are built from code by a custom Unity editor tool, from the meshes and materials to the sound " +
            "effects, which are synthesised in code too. The Breakfast Time table's food art comes from free food " +
            "asset packs (pixel food sprites, and low-poly toast and toaster models).\n" +
            "High scores are kept on the phone, with online leaderboards, a daily challenge and tournaments built " +
            "on Unity Gaming Services (not live yet).",
        links: []
    }
};
