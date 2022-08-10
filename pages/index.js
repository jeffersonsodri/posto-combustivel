import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [lancamentos, setLancamento] = useState([]);

  useEffect(() => {
    async function getAbastecimento() {
      const response = await fetch(
        `http://localhost:3000/api/lancamento/getLancamento`
      );
      const data = await response.json();

      setLancamento(data.lancamentos[0]);
      console.log("modelooo", data.lancamentos[0]);
    }

    getAbastecimento();
  }, []);

  return (
    <div className="container">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <a className="btn btn-primary" href="/lancarCombustivel" role="button">
        Criar Lançamento
      </a>

      <p></p>
      <p></p>
      <p></p>
      {lancamentos.map((lanca) => {
        return (
          <div className="d-flex" key={lanca.id}>
            <p></p>
            <p></p>
            <div className="row card col-md-3">
              <h5 className="card-header">Lançamento {lanca.id}</h5>
              <div className="card-body">
                <p className="card-text">
                  <span> Volme: {lanca.volume}</span>  <p></p>
                  <span> Hadrometro: {lanca.hadrometro}</span> <p></p>
                  <span> Km Rodado: {lanca.hodometro}</span> <p></p>
                  <span> Valor Abastecido: {lanca.valor_litro}</span> <p></p>
                </p>
                <a href="#" className="btn btn-primary">
                  <i className="fa fa-edit">Editar</i>
                </a>
                <a href={`/api/lancamento/deleteLancamento/${lanca.id}`} className="btn btn-danger">
                  <i className="fa fa-edit">Excluir</i>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
