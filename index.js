// Code your solutions in this file
function writeCards(names, event) {
	let message = [];
	for (let i = 0; i < names.length; i++) {
		message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
	}
	return message;
}
console.log(writeCards(names));


function countDown(i) {
  while (i >= 0) {
      console.log(i);
      i--;
  }
}
countDown(10);
