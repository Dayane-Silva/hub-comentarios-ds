const db = require('../db_connect');

const UserService = {
    getDBUsers: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM user', (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    },
    getDBUserById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM user WHERE id =?', [id], (error, result) => {
                if (error) {
                    reject(error.message);
                }
                if (result.length > 0) {
                    resolve(result);

                }
            })
        })
    }

}
addDBNewUser: ({username, password, firstname, lastname}) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO user (username, password, firstname, lastname) VALUES (?,?,?,?)',
            [username, password, firstname, lastname], (error, result) => {
                if (error) {
                    reject('Erro insert comment');
                }
                resolve();
            })
    })
},
updateDBNewUser: (username, password, firstname,) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE user SET username =?, password =?, firstname =? WHERE username =?',
            [username, password, firstname, username], (error, result) => {
                if (error) {
                    reject('Erro insert comment');
                }
                resolve();
            })
    })
},
deleteDBNewUser: (username) => {
    return newPromise((resolve, reject) => {
        db.query("",)
    })
}

module.exports = UserService;