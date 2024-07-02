import Banner from "components/Banner";
import Cabecera from "components/Cabecera/Cabecera";
import Card from "components/Card";
import Pie from "components/Pie";
import Titulo from "components/Titulo";

function Inicio() {
  return (
    <>
      <Cabecera></Cabecera>
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un lugar para guardar Tus videos Favoritos</h1>
      </Titulo>
      <Card id="1" titulo="Gato" capa="https://api.thecatapi.com/api/images/get?format=src&ype=" />
      <Pie />
    </>
  );
}

export default Inicio;
