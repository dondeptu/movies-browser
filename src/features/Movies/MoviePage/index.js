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
  selectCastError,
  selectCastLoading,
  selectCrew,
  selectCrewError,
  selectCrewLoading,
  selectMovieDetails,
  selectMoviesState,
} from "../movieSlice";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";
import { Article } from "../../../common/Article";
import { selectGenresError } from "../genresSlice";
import { NoResults } from "../../../common/NoResults";

function MoviePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetails = useSelector(selectMovieDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const { loading, error } = useSelector(selectMoviesState);
  const genresError = useSelector(selectGenresError);
  const castError = useSelector(selectCastError);
  const crewError = useSelector(selectCrewError);
  const castLoading = useSelector(selectCastLoading);
  const crewLoading = useSelector(selectCrewLoading);

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
                      genres={movieDetails.genres}
                      genresError={genresError}
                    />
                  )}

                  {movieDetails && (
                    <Article
                      articleHeader="Cast"
                      body={
                        castLoading ? (
                          <Loading />
                        ) : castError || !cast || cast.length === 0 ? (
                          <NoResults />
                        ) : (
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
                        )
                      }
                    />
                  )}

                  {movieDetails && (
                    <Article
                      articleHeader="Crew"
                      body={
                        crewLoading ? (
                          <Loading />
                        ) : crewError || !crew || crew.length === 0 ? (
                          <NoResults />
                        ) : (
                          <PersonsContent>
                            {crew.map((crewMember, index) => (
                              <PersonTile
                                key={`${crewMember.id}-${index}`}
                                profilePath={crewMember.profile_path}
                                name={crewMember.name}
                                job={crewMember.job}
                              />
                            ))}
                          </PersonsContent>
                        )
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
