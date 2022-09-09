const chalk = require("chalk");
const fs = require('fs');
const { request } = require("http");
var logger = fs.createWriteStream('log.txt', {flags: 'a'})
const log = console.log;
const checkNumber = require("./utils/checkNumber");
const Numbers = [989123336666,989120526684];
(async () => {
	if (process.argv.length < 3) {
		log(chalk.blue.bold("Checking..."));
		for (let i = 0; i <= Numbers.length; i++) {
			var phoneNumber = Numbers[i];
			const numberExists = await checkNumber(phoneNumber);
			if (numberExists) {
				log(chalk.green.bold(`Number Exists on Whatsapp`));
				logger.write("wa.me/" + phoneNumber)
				console.log("wa.me/" + phoneNumber);
			} else {
				console.log("false " + phoneNumber);
			}
		}
		logger.end()
		process.exit(0);
	}else{
	phoneNumber = process.argv[2];

	log(chalk.blue(`Checking for Existence : ${phoneNumber}`));
	const numberExists = await checkNumber(phoneNumber);
	if (numberExists) log(chalk.green.bold("Number Exists on Whatsapp"));
	else log(chalk.red.bold("Number doesn't exist on Whatsapp"));
	process.exit(0);}
})();
