const express = require('express');

const app = express()
const port = process.env.PORT || 3000;

app.post('/tasks', (req,res) => {
	res.send("test")
})

app.listen(port, () => {
	console.log('Server is up on port ' + port)
})