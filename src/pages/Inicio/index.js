import Cabecera from "components/Cabecera/Cabecera";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./index.modules.css"
import videos from "data/db.json"
import Pie from "components/Pie";

function Inicio() {
  return (
    <>
      <Cabecera></Cabecera>
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un lugar para guardar Tus videos Favoritos</h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>

      <Pie />
    </>
  );
}

export default Inicio;
