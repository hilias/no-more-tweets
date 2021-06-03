const removeQueryParams = require("./remove_query_params")

let queryParamsToRemove = [
    "s"
];

function redirect(request) {
    let oldUrl = request.url;
    let newUrl = removeQueryParams(request.url, queryParamsToRemove);
    if (oldUrl === newUrl) {
        return {};
    }
    return {
        redirectUrl: newUrl,
    };
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    { urls: ["https://twitter.com/*"] },
    ["blocking"],
);