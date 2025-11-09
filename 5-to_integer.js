const arg = process.argv[2];
const intNum = parseInt(arg, 10);

if (!arg || isNaN(intNum)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${intNum}`);
}