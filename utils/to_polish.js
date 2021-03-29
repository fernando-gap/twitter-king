
/**
 * @param {Object} settedOptions
 */

function removeUndefinedProperties(settedOptions) {
	for (let key in settedOptions) {
		
		if (isUndefined(settedOptions[key][1])) {
			settedOptions[key] = "";
		}

		if (isUndefined(settedOptions[key])) {
			settedOptions[key] = "";
		}
	}
	return settedOptions;
}

function isUndefined(value) {
	return value === undefined ? true : false;
}

/** 
 * Here is to transform all arguments 
 * into a single line to be used at processing.
 *
 * @param {Object} options
 * @return {String} args
 */

function formArguments(options) {
	var args = "";
	for (let key in options) {
		if (Array.isArray(options[key])) {
			args += ` ${options[key][0]} ${JSON.stringify(options[key][1])}`
		}

		if (!Array.isArray(options[key]) && options[key] != "") {
			args += ` ${options[key]}`;
		}
	}
	return args;
}

/**
 * This function assign the properties to their 
 * respectively behaviors.
 * 
 * The index 0 of each property is your options
 * from twurl
 *
 * @param {Object} options
 * @return {Object}
 */

function setOptions(options) {
	return {
		method: ['-X', options.method],
		path: options.path,
		headers: ['-A', options.headers],
		data: ['-d', options.data],
		host: ['-H', options.host],
	};
}


function makeJson() {
	let stdout;
	let stderr;

	if (this.stdout != '' || null)
		stdout = JSON.parse(this.stdout);

	if (this.stderr != '' || null) 
		stderr = JSON.parse(this.stderr);
	else 
		stderr = "";

	return {
		stdout,
		stderr
	};
}

module.exports = {
	setOptions,
	removeUndefinedProperties,
	formArguments,
	makeJson
};
