import Banner from "components/Banner-principal";
import Titulo from "components/Titulo1";
import Card from "components/Card";
import styles from "./index.module.css"
import { useEffect, useState } from "react";



function Inicio() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Edna2607/Alura-Cinema-API/videos")
      .then(response => response.json())
      .then(data => {
        setVideos(data)
      })
  }, []);

  return (
    <>
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un lugar para guardar Tus videos Favoritos</h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>


    </>
  );
}

export default Inicio;
