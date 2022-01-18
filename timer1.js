const args = process.argv.slice(2);

let timerArray = args
  .filter(num => Number(num))
  .filter(num => num > 0);

timerArray.forEach(num => {
  setTimeout(() => process.stdout.write('\x07'), num * 1000);
});