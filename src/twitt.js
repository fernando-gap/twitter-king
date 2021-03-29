'use strict';

const { exec } = require('child_process');
const util = require('util');


const {
	removeUndefinedProperties,
	setOptions,
	formArguments,
	makeJson
} = require('../utils/to_polish.js')


// transform our sh in a promise
const shell = util.promisify(exec);

/**
 * Make a request across the twurl
 *
 * @param {Object} options
 * @param {String} hostF
 * return {Promise} request
 */

async function twitt(options) {

	if (JSON.stringify(options) === '{}') {
		throw new Error('No options are passed!');
	}
	
	const args = (removeUndefinedProperties(
		setOptions(options)
	));

	const make = formArguments(args);
	const request = await shell(`twurl ${make}`);	

	// add the option to transform data into json
	request.json = makeJson;
	return request;
}

module.exports = twitt;
