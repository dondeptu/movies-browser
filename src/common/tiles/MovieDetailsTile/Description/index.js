import { PersonDescriptionWrapper, TileDescription } from "./styled";

export const MovieDescription = ({ movieDescription }) => {

    return (
        <TileDescription>{movieDescription.description || "No description available."}</TileDescription>
    )
};

export const PersonDescription = ({ personDescription }) => {

    return (
        <PersonDescriptionWrapper>{personDescription || "No description available."}</PersonDescriptionWrapper>
    )
};