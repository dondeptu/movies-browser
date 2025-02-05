import { useEffect, useState } from "react";
import { useQueryParameter } from "./queryParameters";
import { Input, SearchContainer, SearchIcon } from "./styled";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { pageQueryParamName, searchQueryParamName } from "../../QueryParamName";
import { toMovieList, toPeople } from "../../../routes";

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

        const params = new URLSearchParams(location.search);
        params.set(searchQueryParamName, searchQuery);
        params.delete(pageQueryParamName);

        let path = location.pathname;
        if (path.startsWith(`${toMovieList()}/`) && path !== toMovieList()) {
            path = toMovieList();
        } else if (path.startsWith(`${toPeople()}/`) && path !== toPeople()) {
            path = toPeople();
        }

        history.push(`${path}?${params.toString()}`);
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