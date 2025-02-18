import { PersonDescriptionWrapper, TileDescription } from "./styled";

export const MovieDescription = ({ movieDescription }) => {

    return (
        <TileDescription>{movieDescription.description || "N/A"}</TileDescription>
    )
};

export const PersonDescription = ({ personDescription }) => {

    return (
        <PersonDescriptionWrapper>{personDescription.biography || "N/A"}</PersonDescriptionWrapper>
    )
};