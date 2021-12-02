const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());

require("./controllers/index")(app);


app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))