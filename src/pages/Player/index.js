import Banner from "components/Banner-principal";
import styles from "./Player.module.css";
import Titulo from "components/Titulo1";
import { useParams } from "react-router-dom";

import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";

function Player() {

    const [video, setvideo] = useState([])

    const parametros = useParams()
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Edna2607/Alura-Cinema-API/videos?id=${parametros.id}`)
        .then(response=>response.json())
        .then(data=>{
            setvideo(...data)
        })
    }, [])
    //const video = videos.find(video => video.id === Number(parametros.id))
    console.log(video);
    if (!video) return <NotFound /> /*Si no encuentra ningun video entonces se muestra la pagina de no encontrado */

    return (
        <>
            <Banner img="player" color="#58B9AE" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe width="100%" height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;