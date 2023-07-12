/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 12/07/23
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: any, res: any) => {
    res.send(`Hello World! ${process.env.JEFONES}`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} 🚀`)
})