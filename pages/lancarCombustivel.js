import { useEffect, useState } from "react";
import styles from "../styles/Lancar.module.css";

export default function LancarCombustivel() {
  const [modeloVeiculo, setModeloVeiculo] = useState([]);
  const [veiculos, setVeiculo] = useState([]);

  useEffect(() => {
    async function getModeloVeiculo() {
      const response = await fetch(
        `http://localhost:3000/api/getModeloVeiculo`
      );
      const data = await response.json();

      setModeloVeiculo(data.modelos[0]);
      console.log("modelooo", data.modelos[0]);

      console.log(
        "🚀 ~ file: index.js ~ line 6 ~ Home ~ modeloVeiculo",
        modeloVeiculo
      );
    }

    async function getVeiculo() {
      const response = await fetch(`http://localhost:3000/api/getVeiculo`);
      const data = await response.json();

      setVeiculo(data.veiculos[0]);

      console.log("🚀 ~ file: index.js ~ line 6 ~ Home ~ Veiculo", veiculos);
    }

    getModeloVeiculo();
    getVeiculo();
  }, []);

  return (
    <div className={styles.container}>
      <form action="/api/lancamento/postLancamento" method="post">
        <label for="modelo">Modelo:</label>
        <select class="form-select" aria-label="Default select example" name="modelo">
          <option selected value={null}>Modelo do Carro</option>
          {modeloVeiculo.map((veiculo) => {
            return (
              <option value={veiculo.fabricante}>{veiculo.fabricante}</option>
            );
          })}
        </select>
        <p></p>
        <label for="veiculo">Veículo:</label>
        <select class="form-select" aria-label="Default select example" name="veiculo_id">
          <option selected value={null}>Modelo do Carro</option>
          {modeloVeiculo.map((veiculo) => {
            return <option value={veiculo.id}>{veiculo.nome}</option>;
          })}
        </select>
        <p></p>

        <label for="kmRodado" className="form-label">Quilômetros Rodados</label>
        <input type="text" name="kmRodado" className="form-control" placeholder="Km rodado" required/>
        <p></p>

        <label for="valor_litro" className="form-label">Valor Abastecimento</label>
        <input type="text" name="valor_litro" className="form-control" placeholder="Valor abastecimento" required/>
        <p></p>

        <label for="volume" className="form-label">Quantidade de Litros</label>
        <input type="text" name="volume" className="form-control" placeholder="Quantidade de L" required/>
        <p></p>

        <label for="data" className="form-label">Data do Abastecimento</label>
        <input type="date" name="data" className="form-control"  required/>
        <p></p>

        <label for="cnpjPosto" className="form-label">CNPJ do Posto</label>
        <input type="text"  name="cnpjPosto" className="form-control"  required/>

        <p></p>
        <input
          type="submit"
          className="bg-sucess"
          value="Confirmar"
        />
      </form>
    </div>
  );
}
