import Cabecera from "components/Cabecera/Cabecera";
import Banner from "./components/Banner";
import Titulo from "./components/Titulo";
import Container from "components/Container";
import Pie from "components/Pie";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritoProvider from "context/favoritos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecera />
            <Banner img="home" color="#154580" />
            <Titulo>
                <h1>Un lugar para guardar Tus videos Favoritos</h1>
            </Titulo>
            
            <Container>
                <FavoritoProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                    </Routes>
                </FavoritoProvider>
            </Container>

            <Pie />
        </BrowserRouter>
    )
}

export default AppRoutes;