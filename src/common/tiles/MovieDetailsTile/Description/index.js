import { TileDescription } from "./styled";

export const MovieDescription = ({ movieDescription }) => {

    return (
        <TileDescription>{movieDescription.description || "No description available."}</TileDescription>
    )
};