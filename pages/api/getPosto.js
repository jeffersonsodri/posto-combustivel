import axios from "axios";



export default async function handler(req, res) {



    
    const options = {
        method: 'GET',
        url: 'https://receitaws.com.br/v1/cnpj/' + req.query.cnpj,
        headers: {'Content-Type': 'application/json'}
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        res.status(200).json({ resultado: response.data })
      }).catch(function (error) {
        console.error(error);
      });
      

  }
  