const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({ result: "App Started" });
})

// DB Connection
// mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//     console.log('Mongo Connected!!!')
// }).catch(err => {
//     console.log(err)
// })

app.listen(PORT, () => {
    console.log(`app started ${PORT}`)
});