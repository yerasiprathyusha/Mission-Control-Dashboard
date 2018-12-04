module.exports = {
	port: '8400',
	knex: {
		client: 'sqlite3',
		connection: {
			filename: "./demo4.sqlite"
		},
		useNullAsDefault: true
	}
}
