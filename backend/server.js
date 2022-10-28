const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.json({"status": "Abhinav is up and ready to make moni."});
})

app.listen(5001, () => {
    console.log("Trader Abhinav's ship has set sail from port: 5001")
});