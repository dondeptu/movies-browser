import { TileDescription } from "./styled";

export const MovieDescription = ({ movieDescription }) => {

    return (
        <TileDescription>{movieDescription.description}</TileDescription>
    )
};