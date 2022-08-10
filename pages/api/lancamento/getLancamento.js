import mysql from "mysql2/promise";

export default async function handler(req, res) {


    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "abastecimento",
        port: 3306,
        user: "root",
        password: "",
    })

    try {

        const query = "SELECT * FROM lancamento_abastecimento"
        const values = []
        const data = await dbconnection.execute(query, values)
        dbconnection.end();
        res.status(200).json({ lancamentos: data });


        
    } catch (error) {
        res.send(500).json({error: error.message})
    }
}