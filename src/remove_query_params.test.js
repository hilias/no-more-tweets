const removeQueryParams = require("./remove_query_params");

let testUrl = "https://twitter.com/InternetHippo/status/1344338782737162242?s=20";
let testUrlExpected = "https://twitter.com/InternetHippo/status/1344338782737162242";
let queryParamsToRemove = [
    "s",
];

test('No queryParam in url', () => {
    expect(removeQueryParams(testUrlExpected, queryParamsToRemove)).toBe(testUrlExpected);
  });

test('QueryParam in url', () => {
    expect(removeQueryParams(testUrl, queryParamsToRemove)).toBe(testUrlExpected);
  });

test('Multiple queryParam in url', () => {
    let testUrl = "https://twitter.com/InternetHippo/status/1344338782737162242?s=20&test=10";
    let testUrlExpected = "https://twitter.com/InternetHippo/status/1344338782737162242?test=10";
    expect(removeQueryParams(testUrl, queryParamsToRemove)).toBe(testUrlExpected);
  });



