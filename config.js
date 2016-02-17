module.exports = {
	rethinkdb: {
		host: process.env.RDB_HOST || '10.50.163.13',
		port: 28015,
        authKey: "",
        db: "dermail"
	}
}
