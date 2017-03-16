var J2000Converter = require('../index');

var globalMocha = require('global-mocha');
var describe = globalMocha.describe;
var assert = globalMocha.assert;

// J2000 epoch = 12pm TT on 1/1/2000
// https://en.wikipedia.org/wiki/Epoch_(astronomy)#Julian_years_and_J2000
// According to the US Naval Office, this is 2000 January 1, 11:59:27.816 TAI
// or 2000 January 1, 11:58:55.816 UTC.
// http://aa.usno.navy.mil/faq/docs/TT.php
const UNIX_12PM_GMT_Y2K = 946727935.816;

const NUM_LEAP_SEC = J2000Converter.numLeapSecondsSince2000;

var assert = require('assert');
describe('Converter', function() {
  it('should correctly convert J2000 -> Unix timestamp', function() {
    assert.equal(UNIX_12PM_GMT_Y2K - NUM_LEAP_SEC, J2000Converter.j2000ToUnix(0));
  });

  it('should correctly convert Unix timestamp -> j2000', function() {
    assert.equal(0 + NUM_LEAP_SEC, J2000Converter.unixToJ2000(UNIX_12PM_GMT_Y2K));
  });
});
