import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { Input, SearchContainer, SearchIcon } from "./styled";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Search = () => {
    const location = useLocation();
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <SearchContainer>
            <SearchIcon />
            <Input
                type="text"
                placeholder={`Search for ${location.pathname.includes("/people") ? "people..." : "movies..."}`}
                value={query || ""}
                onChange={onInputChange}
            />
        </SearchContainer>
    );
};