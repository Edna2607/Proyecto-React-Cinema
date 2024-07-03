import { createContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";

export default function FavoritoProvider({ children }) {
    const [favorito, setFavorito] = useState([])

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>

            {children}
        </FavoritosContext.Provider>
    );
}