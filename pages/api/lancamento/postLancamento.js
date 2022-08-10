import mysql from "mysql2/promise";
import { useRouter } from "next/router";

export default async function handler(req, res) {
  console.log("🚀 ~ file: getPosto.js ~ line 6 ~ handler ~ req", req.body);

  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "abastecimento",
    port: 3306,
    user: "root",
    password: "",
  });

  const volume = parseFloat(req.body.volume);
  var date = req.body.data;

  try {
    const query =
      "INSERT INTO lancamento_abastecimento (volume, data, hodometro, valor_litro, veiculo_id) VALUES (" +
      volume +
      ", " +
      date +
      ", " +
      req.body.kmRodado +
      ", " +
      req.body.valor_litro +
      ", " +
      req.body.veiculo_id +
      ")";
    const values = [];
    const result = dbconnection.execute(query, values);
    dbconnection.end();

    useRouter.res.status(200).json({ Resultado: result });
  } catch (error) {
    res.status(500).json({ erro: error.mensage });
  }
}
