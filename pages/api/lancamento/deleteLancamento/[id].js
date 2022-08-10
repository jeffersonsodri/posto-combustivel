import mysql from "mysql2/promise";

export default async function handler(req, res) {


    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "abastecimento",
        port: 3306,
        user: "root",
        password: "",
    })

    console.log('req', req.query);

    try {

        const query = "DELETE FROM lancamento_abastecimento WHERE id='" + req.query.id + "'"
        const values = []
        const data = await dbconnection.execute(query, values)
        dbconnection.end();
        res.status(200).json({ lancamentos: "Excluido" });
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}