
// Modules

require('dotenv').config()
const chalk = require('chalk');
const axios = require('axios').default

// Default Varibles

axios
    .get(process.env.API, {
        'Content-type': 'application/json'
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(err => console.log(chalk.red(`Error: ${chalk.yellow(err)}`)))
