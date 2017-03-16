J2000 Converter
---

This is a simple javascript converter between j2000, unix time, and javascript date formats.

```
var converter = require('j2000');

var unixTime = converter.j2000ToUnix(2457828.5);
// unixTime = 949185759.316

var j2000Time = converter.unixToJ2000(949185759.316);
// j2000Time = 2457828.5
```

You can also convert Javascript dates:

```
var converter = require('j2000');

var april1st = new Date(2016, 3, 1);  // Note that Javascript months are 0-indexed
var j2000Time = converter.dateToJ2000(april1st);
// j2000Time = 512766069.184

var myDate = converter.j2000ToDate(512766069.184);
// <Date Object> 2016-04-01T07:00:00.000Z
```
