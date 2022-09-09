const fs = require('fs');
var logger = fs.createWriteStream('gen.txt', {flags: 'a'})
const know = ["3", "5","6","8"];
var z = 0;
var y = 0;
var x = 0;


for (let i = 1; i <= 64; i++) {
  var phoneNumber = "98"+"912"+know[z]+know[y]+know[x]+"6666"+","
  console.log(phoneNumber);
  logger.write("wa.me/" + phoneNumber)
  x += 1;
  if (x == know.length) {
    (x = 0), y++;
  }
  if (y == know.length) {
    (y = 0), z++;
  }
}
logger.end()