var J2000Converter = require('../index');

var globalMocha = require('global-mocha');
var describe = globalMocha.describe;
var assert = globalMocha.assert;

var assert = require('assert');
describe('Converter', function() {
	it('should correctly convert J2000 -> Unix timestamp', function() {
		assert.equal(946684800, J2000Converter.j2000ToUnix(0));
	});
});
