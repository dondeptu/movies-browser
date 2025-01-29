import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { MovieDetailsTile } from "../../../common/tiles/MovieDetailsTile";
import { PersonTile } from "../../../common/tiles/Persons/PersonTile";
import { PersonsContent } from "../../../common/tiles/Persons/styled";
import { MainContent } from "../../../common/MainContent";
import { MovieBanner } from "../../../common/tiles/MovieDetailsTile/banner/MovieBanner";
import { SectionBanner } from "../../../common/tiles/MovieDetailsTile/banner/SectionBanner";
import { Wrapper } from "../../../Wrapper";
import {
  fetchMovieDetails,
  selectMovieDetails,
  selectMoviesState,
} from "../movieSlice";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";

function MoviePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetails = useSelector(selectMovieDetails);
  const { loading, error } = useSelector(selectMoviesState);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <SectionBanner
            body={
              <MovieBanner
                backdropPath={movieDetails.backdrop_path}
                title={movieDetails.title}
                voteAverage={movieDetails.vote_average}
                voteCount={movieDetails.vote_count}
              />
            }
          />
          <Wrapper>
            <MainContent
              mainHeader=""
              body={
                movieDetails ? (
                  <MovieDetailsTile
                    poster_path={movieDetails.poster_path}
                    title={movieDetails.title}
                    production_countries={movieDetails.production_countries}
                    release_date={movieDetails.release_date}
                    vote_average={movieDetails.vote_average}
                    vote_count={movieDetails.vote_count}
                    overview={movieDetails.overview}
                  />
                ) : (
                  <p>No details available</p>
                )
              }
            />
            <MainContent
              mainHeader="Cast"
              body={
                <PersonsContent>
                  <PersonTile />
                  <PersonTile />
                  <PersonTile />
                  <PersonTile />
                  <PersonTile />
                  <PersonTile />
                  <PersonTile />
                  <PersonTile />
                </PersonsContent>
              }
            />
            <MainContent
              mainHeader="Crew"
              body={
                <PersonsContent>
                  <PersonTile />
                  <PersonTile />
                  <PersonTile />
                </PersonsContent>
              }
            />
          </Wrapper>
        </>
      )}
    </>
  );
}
export default MoviePage;
