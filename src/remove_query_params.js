function removeQueryParams(url, queryParamsToRemove) {
    url = new URL(url);
    let params = new URLSearchParams(url.search);
    queryParamsToRemove.forEach(queryParam => {
        params.delete(queryParam);
    });
    url.search = params.toString();
    return url.toString();
}

module.exports = removeQueryParams;