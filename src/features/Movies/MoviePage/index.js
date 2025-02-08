import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { MovieDetailsTile } from "../../../common/tiles/MovieDetailsTile";
import { PersonTile } from "../../../common/tiles/Persons/PersonTile";
import { PersonsContent } from "../../../common/tiles/Persons/styled";
import { Section } from "../../../common/Section";
import { MovieBanner } from "../../../common/tiles/MovieDetailsTile/banner/MovieBanner";
import { SectionBanner } from "../../../common/tiles/MovieDetailsTile/banner/SectionBanner";
import { Wrapper } from "../../../Wrapper";
import {
  fetchMovieDetails,
  selectCast,
  selectCrew,
  selectMovieDetails,
  selectMoviesState,
} from "../movieSlice";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";
import { Article } from "../../../common/Article";
import { groupCrew } from "./groupedCrew";

function MoviePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetails = useSelector(selectMovieDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const { loading, error } = useSelector(selectMoviesState);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  const groupedCrew = groupCrew(crew); 

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
              movieDetails ? (
                <MovieBanner
                  backdropPath={movieDetails.backdrop_path}
                  title={movieDetails.title}
                  voteAverage={movieDetails.vote_average}
                  voteCount={movieDetails.vote_count}
                />
              ) : null
            }
          />
          <Wrapper>
            <Section
              sectionHeader=""
              body={
                <>
                  {movieDetails && (
                    <MovieDetailsTile
                      posterPath={movieDetails.poster_path}
                      title={movieDetails.title}
                      productionCountries={movieDetails.production_countries}
                      releaseDate={movieDetails.release_date}
                      voteAverage={movieDetails.vote_average}
                      voteCount={movieDetails.vote_count}
                      overview={movieDetails.overview}
                    />
                  )}

                  {(movieDetails && cast.length > 0) && (
                    <Article
                      articleHeader="Cast"
                      body={
                        <PersonsContent>
                          {cast.map((castMember, index) => (
                            <PersonTile
                              key={`${castMember.id}-${index}`}
                              showSubtitle={true}
                              profilePath={castMember.profile_path}
                              name={castMember.name}
                              character={castMember.character}
                            />
                          ))}
                        </PersonsContent>
                      }
                    />
                  )}

                  {(movieDetails && groupedCrew.length > 0) && (
                    <Article
                      articleHeader="Crew"
                      body={
                        <PersonsContent>
                          {groupedCrew.map((crewMember, index) => (
                            <PersonTile
                              key={`${crewMember.id}-${index}`}
                              profilePath={crewMember.profile_path}
                              name={crewMember.name}
                              jobs={crewMember.jobs}
                            />
                          ))}
                        </PersonsContent>
                      }
                    />
                  )}
                </>
              }
            />
          </Wrapper>
        </>
      )}
    </>
  );
}
export default MoviePage;
