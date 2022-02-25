const db = require("../../data/dbConfig");

function findBy(filter) {
  return db("users").where(filter).first()
}

async function add(user) { 
    const [user_id] = await db('users').insert(user)
   return findBy({ user_id })
  }

module.exports = {
  findBy,
  add,
};
