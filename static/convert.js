import fs from 'fs';

let rawdata = fs.readFileSync('oldData.json');
let data = JSON.parse(rawdata);

let players = [];
let teams = [];
for (var i = 0; i < data.teams.length; i++) {
	teams[i] = {
		name: data.teams[i].name,
		players: [],
		playing: []
	};
	for (var j = 0; j < data.teams[i].players.length; j++) {
		players.push(data.teams[i].players[j].name);
		teams[i].players.push(data.teams[i].players[j].name);
		teams[i].playing.push(true);
	}
	if (data.teams[i].sub) {
		players.push(data.teams[i].sub.name);
		teams[i].players.push(data.teams[i].sub.name);
		teams[i].playing.push(false);
	}
}

players.sort();

console.log('players + teams converted!');

for (var i = 0; i < teams.length; i++) {
	for (var j = 0; j < teams[i].players.length; j++) {
		teams[i].players[j] = players.indexOf(teams[i].players[j]);
	}
}

let matches = [];
i = 0;
while (i + 1 < teams.length) {
	matches.push({
		team1: {
			id: i,
			alive: teams[i].playing,
			playing: teams[i].playing,
			revives: Array(teams[i].players.length).fill(0),
			kills: Array(teams[i].players.length).fill([])
		},
		team2: {
			id: i + 1,
			alive: teams[i + 1].playing,
			playing: teams[i + 1].playing,
			revives: Array(teams[i + 1].players.length).fill(0),
			kills: Array(teams[i + 1].players.length).fill([])
		},
		judge: 0
	});

	i += 2;
}

// for (var i = 0; i < data.teams.length; i++) {
// 	let list = [];
// 	for (var j = 0; j < data.teams[i].players.length; j++) {
// 		list.push(data.teams[i].players[j].name);
// 	}
// 	list.sort();
//
// 	for (var i = 0; i < list.length; i++) {
// 		list[i] = findStringInArr(list[i], players);
// 	}
//
// 	teams.push({
// 		name: data.teams[i].name,
// 		players: list
// 	});
// }

fs.writeFileSync(
	'test.json',
	JSON.stringify(
		{
			matches
		},
		null,
		4
	)
);
