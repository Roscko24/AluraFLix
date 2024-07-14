import Base from "./pages/Base";
import Inicio from "./pages/Inicio";
import NuevoVideo from "./pages/NuevoVideo";



const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Base />}>
                        <Route index element={<Inicio />}></Route>
                        <Route path="/nuevoVideo" element={<NuevoVideo />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes