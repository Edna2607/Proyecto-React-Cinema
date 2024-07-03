import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritosContext } from "context/favoritos";

function Favoritos() {
    const { favorito } = useFavoritosContext();

    return (
        <>
            <Banner img="favorite" color="#AF7EAA" />
            <Titulo>
                <h1>Mis Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map(fav => {
                    return <Card {...fav} key={fav.id} />;
                })}
            </section>
        </>
    )
}

export default Favoritos;