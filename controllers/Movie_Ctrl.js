const models = require("../models/models");

const getMovie = (req, res) => {
  models.Movie.findAll().then((movies) => res.status(200).json(movies));
};

const postMovie = (req, res) => {
  const { title, view, genre, age } = req.body;
  models.Movie.create({
    title,
    view,
    genre,
    age,
  }).then((movie) => {
    res.status(201).json(movie);
  });
};

const putMovie = (req, res) => {
  const { title, updateview } = req.body;
  models.Movie.update({ view: updateview }, { where: { title: title } }).then(
    (result) => {
      res.status(204).json(result);
      console.log(result);
    }
  );
};

const deleteMovie = (req, res) => {
  const { title } = req.body;
  models.Movie.destroy({
    where: { title },
  }).then((result) => {
    res.status(204).json();
  });
};

module.exports = {
  getMovie,
  postMovie,
  deleteMovie,
  putMovie,
};
