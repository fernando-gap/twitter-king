# Twwk

This tool is for who wants to use the twitter api with Oauth 1.0a easily using node.js.
You need your access keys, and the whole thing is made by twurl :)
This tool is made upon promises, because promises are awesome. Enjoy.

## Installing

To install and use properly you must install twurl first:
- Ruby >2.7

```sh
gem install twurl && sudo cp /usr/local/twurl $PWD/
```

Just set your consumer keys to start to use:

```sh
twurl authorize  --consumer-key <key> \ 
--consumer-secret <key-secret>
```

## Getting Start

```javascript
const twitt = require('twwk');

(async () => {
	const request = await twitt({
		method: 'GET',
		path: '/1.1/search/tweets.json?q=twurl',
		host: 'api.twitter.com' // default
	} /* you can put the host here too */);
	
	const { stdout: json } = request;
	console.log(json);
})();

```

You can choose any path, any host, and the methods that you want.
