var J2000Converter = require('../index');

var globalMocha = require('global-mocha');
var describe = globalMocha.describe;
var assert = globalMocha.assert;

// J2000 epoch = 12pm GMT on 1/1/2000
// https://en.wikipedia.org/wiki/Epoch_(astronomy)#Julian_years_and_J2000
const UNIX_12PM_GMT_Y2K = 946728000;

var assert = require('assert');
describe('Converter', function() {
	it('should correctly convert J2000 -> Unix timestamp', function() {
		assert.equal(UNIX_12PM_GMT_Y2K, J2000Converter.j2000ToUnix(0));
	});

	it('should correctly convert Unix timestamp -> j2000', function() {
		assert.equal(0, J2000Converter.unixToJ2000(UNIX_12PM_GMT_Y2K));
	});
});
