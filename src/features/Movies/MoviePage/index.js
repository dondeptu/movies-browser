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
  selectMovieDetails,
  selectMoviesState,
} from "../movieSlice";
import {
  selectCastError,
  selectCast,
  selectCastLoading,
  selectCrew,
  selectCrewError,
  selectCrewLoading,
} from "../../creditsSlice";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";
import { Article } from "../../../common/Article";
import { groupCrewPeople } from "../../groupedCrew";
import { selectGenresError } from "../genresSlice";

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

  const groupedCrew = groupCrewPeople(crew);

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
                      articleHeader={
                        cast && cast.length > 0 ? "Cast" : "No cast available"
                      }
                      body={
                        castLoading ? (
                          <Loading />
                        ) : castError || !cast || cast.length === 0 ? null : (
                          <PersonsContent>
                            {cast.map((castMember) => (
                              <PersonTile
                                key={`${castMember.id}-${castMember.character}-${index}`}
                                id={castMember.id}
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
                      articleHeader={
                        groupedCrew && groupedCrew.length > 0
                          ? "Crew"
                          : "No crew available"
                      }
                      body={
                        crewLoading ? (
                          <Loading />
                        ) : crewError ||
                          !groupedCrew ||
                          groupedCrew.length === 0 ? null : (
                          <PersonsContent>
                            {groupedCrew.map((crewMember) => (
                              <PersonTile
                                key={`${crewMember.id}-${crewMember.jobs}-${index}`}
                                id={crewMember.id}
                                profilePath={crewMember.profile_path}
                                name={crewMember.name}
                                jobs={crewMember.jobs}
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
