import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./index.module.css"
import videos from "data/db.json"


function Inicio() {
  return (
    <>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>


    </>
  );
}

export default Inicio;
