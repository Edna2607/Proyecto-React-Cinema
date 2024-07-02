import Banner from "components/Banner";
import Cabecera from "components/Cabecera/Cabecera";
import Pie from "components/Pie";

function Inicio() {
  return (
    <>
      <Cabecera></Cabecera>
      <Banner img="home" color="#154580" />

      <Pie />
    </>
  );
}

export default Inicio;
