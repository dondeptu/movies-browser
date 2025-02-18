import { PersonDescriptionWrapper, TileDescription } from "./styled";

export const MovieDescription = ({ movieDescription }) => {

    return (
        <TileDescription>{movieDescription.description || "No description available."}</TileDescription>
    )
};

export const PersonDescription = ({ personDescription }) => {

    return (
        <PersonDescriptionWrapper>{personDescription.biography || "No description available."}</PersonDescriptionWrapper>
    )
};