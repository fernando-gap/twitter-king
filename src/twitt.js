'use strict';

const { execFile } = require('child_process');
const util = require('util');

// transform our sh in a promise
const shell = util.promisify(execFile);

/**
 * Make a request across the twurl
 *
 * @param {Object} options
 * @param {String} hostF
 * return {Promise}
 */

async function twitt(options, hostF = 'api.twitter.com') {
	const opts = JSON.stringify(options) === '{}'
		? new Error('No options are passed'): options;

	// verify if options are passed
	if (opts instanceof Error) {
		console.log(opts.message);
	}
	else {
		const { method, path, host: hostO} = opts;

		// verify whether is valid
		const host = hostF || hostO;

		// makes the request
		const request = await shell('../bin/twurl', ['-H', `${host}`,'-X', `${method}`, `${path}`]);

		if (request.stdout.substr(0, 7) === 'Invalid') {
			throw new Error('Invalid URI detected\n');
		}
		
		return request;
	}
}

module.exports = twitt;
