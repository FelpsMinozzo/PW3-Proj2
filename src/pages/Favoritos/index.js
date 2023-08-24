import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from './favoritos.module.css';
import React, { useEffect, useState } from "react";

function Favoritos(){
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/FelpsMinozzo/fake_api/filmes?favorit=1')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    return(
        <>
            <Banner imagem='favoritos'/>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>

            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id}/>
                })}
            </section>
        </>
    )

}

export default Favoritos;
