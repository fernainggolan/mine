const bcryptjs = require('bcryptjs');

const hashPassword = (password) => {
    const hash = bcryptjs.hashSync(password, 8);
    return hash;
}

const comparePassword = (password, hash) => {
    const compare = bcryptjs.compareSync(password, hash);
    return compare;
}

module.exports = {
    hashPassword,
    comparePassword
}