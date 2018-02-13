var J2000Converter = undefined;

(function() {
  // See https://www.ietf.org/timezones/data/leap-seconds.list
  // Last updated: 1 Jan 2017
  var LEAP_SEC_SINCE_J2000 = 5;

  // Unix time at 12:00:00 TT Jan 1 2000
  var UNIX_J2000_TT_EPOCH_SEC = 946727935.816;

  function unixToJ2000(unix_time) {
    return unix_time - UNIX_J2000_TT_EPOCH_SEC + LEAP_SEC_SINCE_J2000;
  }

  function j2000ToUnix(j2000_time) {
    return j2000_time + UNIX_J2000_TT_EPOCH_SEC - LEAP_SEC_SINCE_J2000
  }

  function dateToJ2000(date) {
    return unixToJ2000(date.getTime() / 1000);
  }

  function j2000ToDate(j2000) {
    return new Date(j2000ToUnix(j2000) * 1000);
  }

  J2000Converter = {
    unixToJ2000: unixToJ2000,
    j2000ToUnix: j2000ToUnix,
    dateToJ2000: dateToJ2000,
    j2000ToDate: j2000ToDate,
    NUM_LEAP_SEC_SINCE_2000: LEAP_SEC_SINCE_J2000,
  };
})();

if (typeof module !== 'undefined') {
  module.exports = J2000Converter;
}
