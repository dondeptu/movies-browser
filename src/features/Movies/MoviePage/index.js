import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { MovieDetailsTile } from "../../../common/MovieDetailsTile";
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

    console.log(movieDetails);

    return (
        <Wrapper>
            <MainContent
                mainHeader=""
                body={
                    movieDetails ? (
                        <MovieDetailsTile  />
                    ) : (
                        <p>No details available</p>
                    )
                }
            />
        </Wrapper>
    );
}
export default MoviePage;