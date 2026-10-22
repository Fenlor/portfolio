# Andrew Fenn — Portfolio

My personal portfolio site: a short intro and the projects I've built, each with screenshots, links and
(where there is one) a demo video.

**Software Engineer · Interactivity Creator · XR Enthusiast**

## Featured projects

| Project | What it is | Built with |
| --- | --- | --- |
| **ASDVR Application** | VR application developed with a psychology PhD student, for the Meta Quest headsets ([video](https://www.youtube.com/watch?v=0lrz7CGEIQg&list=PLZIxqPCwO_KfR7vQlYHblV19LgNNGHSS0)) | Unity, C#, Blender, Audacity |
| **QuestScan** | Room scanning on Meta Quest 3: capture an interior with the headset, then walk through it as a textured mesh or Gaussian splat | Unity, C#, Meta XR SDK, Python, COLMAP, OpenMVS |
| **Starship Fenterprise** | Arcade-style space game for mobile | Unity, C# |
| **Pinball Game** | 3D pinball for phones with two tables, missions, multiball and online scores (not live yet), built solo | Unity, C#, free food asset packs |
| **Sensory Dining Plate** | Research project: a mixed reality dining experience for elderly people | |
| **[Recipme](https://recipme.pages.dev/)** | Recipe and meal planning app (beta): hands-free cooking mode, meal plan, shopping lists and pantry, recipe import, works offline | React, Vite, Tailwind CSS, Supabase |

## Tech stack

- [React 19](https://react.dev/) with [React Router 7](https://reactrouter.com/) for client-side routing
- [Vite 8](https://vite.dev/) for the dev server and production build
- Plain CSS, no UI framework
- ESLint with the React Hooks and React Refresh plugins

## Running it locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev        # http://localhost:5173 (also exposed on your LAN for testing on a phone)
```

Other scripts:

```bash
npm run build      # production build to dist/
npm run preview    # serve the production build
npm run lint       # ESLint
```

## How it's put together

- **`src/data/projects.js`** holds every project's title, description, images, links and optional
  YouTube video id. Pages read from it rather than hard-coding content.
- **`src/pages/Home.jsx`** shows the intro and a card per project; clicking a thumbnail opens an image
  viewer with a link to the full project page.
- **`src/pages/ProjectDetails.jsx`** is one page for every project, at `/project/<id>`, with the video,
  image carousel, description and links.
- **`src/index.css`** has all the styles, including the phone layout.

### Adding a project

1. Put its images in `public/` and add an entry to `src/data/projects.js`:

   ```js
   myproject: {
       id: "myproject",
       title: "My Project",
       thumbnail: image1,
       images: [image1, image2],
       youtubeId: "VIDEO_ID",             // optional: the part after watch?v= in a YouTube URL
       description: "First paragraph.\nSecond paragraph.",
       links: [{ label: "GitHub", url: "https://github.com/..." }]
   }
   ```

2. Add a `ProjectSummary` for it in `src/pages/Home.jsx`. Its details page at `/project/myproject` works
   automatically.

## Deploying

The site uses browser routing, so the host must serve `index.html` for every path (for example a
Netlify `_redirects` rule or a Vercel rewrite); otherwise refreshing `/project/<id>` returns a 404.

## Contact

[afenn.dev@gmail.com](mailto:afenn.dev@gmail.com)
