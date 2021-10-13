let sum = 0;
let numberArg = process.argv;

for ( let i=2; i < numberArg.length; i++ ) {

	sum += Number(process.argv[i]);
}

console.log(sum);

