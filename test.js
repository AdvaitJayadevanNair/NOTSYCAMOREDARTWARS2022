import fs from 'fs';

let rawdata = fs.readFileSync('data.json');
let { teams } = JSON.parse(rawdata);
let playerCount = 0;
let subCount = 0;
for (var i = 0; i < teams.length; i++) {
	teams[i];
	playerCount += teams[i].players.length;
	if (teams[i].sub) {
		subCount++;
	}
}
console.log('Player Count:', playerCount);
console.log('Sub Count:', subCount);
console.log('Total Count:', playerCount + subCount);
console.log('🤑: $' + (playerCount + subCount) * 20);
/*
Player Count: 180
Sub Count: 18
Total Count: 198
🤑: $3960
*/
