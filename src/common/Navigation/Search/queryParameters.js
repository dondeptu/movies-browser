import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import { searchQueryParamName } from "./QueryParamName";

export const useQueryParameter = key => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
};

export const useSearchQuery = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);

    const [searchQuery, setSearchQuery] = useState(searchParams.get(searchQueryParamName) || "");

    useEffect(() => {
        const newSearchParams = new URLSearchParams(location.search);
        newSearchParams.set(searchQueryParamName, searchQuery);
        history.replace({ search: newSearchParams.toString() });
    }, [searchQuery, history, location.search]);

    return [searchQuery, setSearchQuery];
};