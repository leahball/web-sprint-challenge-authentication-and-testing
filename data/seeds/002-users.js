exports.seed = function (knex, Promise) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        {
          username: "leah",
          password:
            "$2a$08$AzMESN5tpgbcjvseI7Kff.R4D2BnhBQohpYP1apjU6kmIeDG/f/ha",
        },
        {
          username: "evan",
          password:
            "$2a$08$ezPYySo182CGrBWD66Y/LOwnr13lGibJ4HIiEzI.NeuJm5ln.Heta",
        },
        {
          username: "danni",
          password:
            "$2a$08$k/avsi0SX5hWibswULE.Be4ZrW4QiH7SjBpDfluf.EVQmfOfpSzHK",
        },
      ]);
    });
};
