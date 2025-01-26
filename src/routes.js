export const toMovieList = () => "/movies";
export const toPeople = () => "/people";
export const toMoviePage = ({ id } = { id: ":id" }) => `/movies/${id}`;