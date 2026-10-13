import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";

export const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails/>}/>
            <Route path="/ASDVR" element={<Navigate to="/project/asdvr" replace/>}/>
            <Route path="/SpaceGame" element={<Navigate to="/project/spacegame" replace/>}/>
            <Route path="/RecipeMe" element={<Navigate to="/project/recipeme" replace/>}/>
        </Routes>
    )
}

export default App
