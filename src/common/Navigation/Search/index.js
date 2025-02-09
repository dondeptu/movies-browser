import { useEffect, useRef, useState } from "react";
import { useQueryParameter } from "./queryParameters";
import { Input, SearchContainer, SearchIcon } from "./styled";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { pageQueryParamName, searchQueryParamName } from "../../QueryParamName";
import { toMovieList, toPeople } from "../../../routes";

export const Search = () => {
    const location = useLocation();
    const query = useQueryParameter(searchQueryParamName) || "";
    const [searchQuery, setSearchQuery] = useState(query);

    useEffect(() => {
        setSearchQuery(query);
    }, [query]);


    const useUpdateQueryParameter = setSearchQuery => {
        const searchDelay = 500;
        const history = useHistory();
        const timeout = useRef();
        let path = location.pathname;

        const params = new URLSearchParams(location.search);

        return ((newQuery) => {
            clearTimeout(timeout.current);
            setSearchQuery(newQuery);

            if (newQuery) {
                params.set(searchQueryParamName, newQuery);
            } else {
                params.delete(searchQueryParamName);
            }
            params.delete(pageQueryParamName);

            timeout.current = setTimeout(() => {
                if (path.startsWith(`${toMovieList()}/`) && path !== toMovieList()) {
                    path = toMovieList();
                } else if (path.startsWith(`${toPeople()}/`) && path !== toPeople()) {
                    path = toPeople();
                }

                history.push(`${path}?${params.toString()}`);
            }, searchDelay);
        });
    };

    const updateQueryParameter = useUpdateQueryParameter(setSearchQuery);

    const onInputChange = (e) => {
        updateQueryParameter(e.target.value);
    };

    return (
        <SearchContainer>
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