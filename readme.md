Firefox extension to remove the "s" query parameter on twitter links so it shows all of the responses to the tweet.

## Build
You need `node >= 10.17.0`
You need yarn or npm, we will use yarn as an example
1. `yarn install` to install the required packages
1. `yarn test` to execute tests
1. `yarn start` will bundle and execute web-ext run to test the addon
1. `yarn build` will bundle and build the addon putting the result in a folder named `web-ext-artifacts`