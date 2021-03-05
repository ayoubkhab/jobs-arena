const express = require('express');
const cors = require('cors');
const axios = require('axios')
const app = express();


app.use(cors());
const ENDPOINT_URL = '';

app.get('/', function(req, res) {
	axios.get(ENDPOINT_URL).then(res => {
		if res.status === 200 {
			res.send(res.data)
		}
	}).catch(err => {
		console.log('Error making request.')
		res.send(err)
	})
})

const port = 3001;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})