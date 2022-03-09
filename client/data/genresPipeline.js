const stages = [{
  $project: {
    genres: true,
    year: true
  }
}, {
  $unwind: {
    path: '$genres'
  }
}, {
  $group: {
    _id: '$year',
    genres: {
      $addToSet: '$genres'
    }
  }
}, {
  $sort: {
    _id: -1
  }
}, { $out: 'genres' }]