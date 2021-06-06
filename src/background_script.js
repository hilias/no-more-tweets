const removeQueryParams = require("./remove_query_params")

let queryParamsToRemove = [
    "s"
];

let patterns = [
    {
        pattern: "https://twitter.com/*",
        queryParamsToRemove: [
            "s",
        ],
        listener: null,
    }
]

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

function listenerBuilder(pattern) {
    console.log("[DEBUG EXTENSION]: Building listener for " + pattern.pattern);
    return (request) => {
        let oldUrl = request.url;
        let newUrl = removeQueryParams(request.url, pattern.queryParamsToRemove);
        if (oldUrl == newUrl) {
            return {};
        }
        return {
            redirectUrl: newUrl,
        };
    }
}

patterns = patterns.map(p => {p.listener = listenerBuilder(p); return p;});


patterns.forEach(pattern => {
    console.log("[DEBUG EXTENSION]: " + pattern.pattern);
    browser.webRequest.onBeforeRequest.addListener(
        pattern.listener,
        { "urls": [pattern.pattern]},
        ["blocking"]
    );
});

// browser.webRequest.onBeforeRequest.addListener(
//     redirect,
//     { urls: ["https://twitter.com/*"] },
//     ["blocking"],
// );