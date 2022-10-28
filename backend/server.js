const express = require('express');
const app = express();

// const auth = require('./routes/routes')
// Routes
const userRoute = require('./routes/userRoutes')



app.use(express.json())
// app.use('/auth', auth);
app.get(`/health`, (req, res) => {
    res.send(`User App Running at port : ${port}`);
    console.log(`User App Running at port : ${port}`);
});

const port = 5001;

app.listen(port, () => {
    console.log("Trader Abhinav's ship has set sail from port: 5001")
});

