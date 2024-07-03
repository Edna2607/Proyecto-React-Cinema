import Cabecera from "components/Cabecera/Cabecera";
import Container from "components/Container";
import Pie from "components/Pie";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritoProvider from "context/favoritos";
import Player from "pages/Player";
import NotFound from "pages/NotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecera />
            <Container>
                <FavoritoProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/:id" element={<Player/>}></Route>
                        <Route path="*" element={<NotFound/>}></Route>
                    </Routes>
                </FavoritoProvider>
            </Container>

            <Pie />
        </BrowserRouter>
    );
}

export default AppRoutes;