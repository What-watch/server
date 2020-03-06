function selectionId (movieId) {
  let arr = movieId.split('/')
  let idMovie = arr[2]
  return idMovie
}

module.exports = selectionId
