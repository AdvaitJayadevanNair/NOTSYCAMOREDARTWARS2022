import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/AdvaitJayadevanNair/NOTSYCAMOREDARTWARS2022.git', // Update to point to your repository
		user: {
			name: 'Advait Jayadevan Nair', // update to use your name
			email: 'advaitjayadevannair@sycamoreschools.org' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
