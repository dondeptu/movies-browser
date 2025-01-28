import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { MovieDetailsTile } from "../../../common/tiles/MovieDetailsTile";
import { PersonTile } from "../../../common/tiles/Persons/PersonTile";
import { PersonsContent } from "../../../common/tiles/Persons/styled";
import { MainContent } from "../../../common/MainContent";
import { Wrapper } from "../../../Wrapper";
import { fetchMovieDetails, selectMovieDetails } from "../movieSlice";


function MoviePage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movieDetails = useSelector(selectMovieDetails);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    return (
        <Wrapper>
            <MainContent
                mainHeader=""
                body={
                    movieDetails ? (
                        <MovieDetailsTile
                            posterPath={movieDetails.poster_path}
                            title={movieDetails.title}
                            productionCountries={movieDetails.production_countries}
                            releaseDate={movieDetails.release_date}
                            genres={movieDetails.genres}
                            voteAverage={movieDetails.vote_average}
                            voteCount={movieDetails.vote_count}
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
            < MainContent
                mainHeader="Crew"
                body={
                    <PersonsContent>
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                    </PersonsContent>
                }
            />
        </Wrapper >
    );
}
export default MoviePage;