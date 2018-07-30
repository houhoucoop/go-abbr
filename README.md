# Go abbr
[![Build Status](https://travis-ci.org/qq7886/go-abbr.svg?branch=master)](https://travis-ci.org/qq7886/go-abbr)  
A text converter that generate minimal abbreviations for every word following rules. [DEMO](https://codepen.io/qq7886/full/deYLeY/)

## Rules
* Turn any words within that string of length 4 or greater into an abbreviation.
* The format includes first letter, then the number of removed characters, then the last letter.
* Space or hyphen will split up a series of letters into two words.

## Usage
```bash
npm i go-abbr --save
```

```js
const goAbbr = require('go-abbr');

goAbbr('abb'); // abb
goAbbr('abbr'); // a2r
goAbbr('abbreviation'); // a10n
goAbbr('go-abbreviation'); // go-a10n

```