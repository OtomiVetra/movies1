const Movie = require('../model/Movie');
const Comment = require('../model/Comment');

const list = async (req, res) => {
  try {
    const { skip = 0, limit = 10 } = req.query;
    res.json({
      count: await Movie.countDocuments(),
      items: await Movie.find().skip(+skip).limit(+limit)
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