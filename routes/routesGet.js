const express = require("express");
const router = express.Router();

const con = require("../conexiones/mysqlConexion")

router.get("/getAll", async (req, res) => {
    con.connect()

    con.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
            if (err) throw err

            console.log('The solution is: ', rows[0].solution)
    })

    con.end()
    res.json({Mensaje:"prueba exitosa"})
  });


  module.exports = router;