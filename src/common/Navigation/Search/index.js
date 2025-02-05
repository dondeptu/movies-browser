import { useEffect, useState } from "react";
import { useQueryParameter } from "./queryParameters";
import { Input, SearchContainer, SearchIcon } from "./styled";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { searchQueryParamName } from "../../QueryParamName";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = useQueryParameter(searchQueryParamName);
    const [searchQuery, setSearchQuery] = useState(query || "");

    useEffect(() => {
        if (!query) {
            setSearchQuery("");
        }
    }, [location.pathname, query]);

    const onInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (searchQuery === query) {
            return;
        }

        history.push(`${location.pathname}?${searchQueryParamName}=${searchQuery}`);
    };

    return (
        <SearchContainer onSubmit={onFormSubmit}>
            <SearchIcon />
            <Input
                type="text"
                placeholder={`Search for ${location.pathname.includes("/people") ? "people..." : "movies..."}`}
                value={searchQuery}
                onChange={onInputChange}
            />
        </SearchContainer>
    );
};