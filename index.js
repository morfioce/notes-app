const yargs = require('yargs')

const options = {
	x: {demand: true},
	y: {demand: true}
}
const argv = yargs.
	command('add', 'Add two numbers', options)
	.command('mul', 'Multiply two numbers', options)
	.help()
	.argv;


const command = argv._[0];
const x = argv.x;
const y = argv.y;

console.log(argv)

if (command === "add") {
	console.log(`reslut: ${x+y}`);
}