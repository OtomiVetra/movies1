const Movie = require('../model/Movie');
const Comment = require('../model/Comment');

const list = async (req, res) => {
  try {
    const criteria = {}
    const { skip = 0, limit = 10, genre, year } = req.query;
    if (genre) { criteria.genres = genre }
    if (year) { criteria.year = year }
    res.json({
      count: await Movie.countDocuments(criteria),
      items: await Movie.find(criteria).skip(+skip).limit(+limit)
    });
  } catch (error) {
    next(error)
  }
}
const getById = async (req, res, next) => {
  try {
    res.json({
      item: await Movie.findById(req.params.id),
      comments: await Comment.find({ movie_id: req.params.id })
    })
  } catch (error) {
    next(error)
  }

}
module.exports = {
  list,
  getById
}