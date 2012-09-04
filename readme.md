# Nibble!

Nibble is a CSS framework built on top of [nib] and strongly influenced by
[foundation](http://foundation.zurb.com).

It provides a grid system and basic elements like buttons and menu items.

> It's like nibbling on a flying spaghetti monster's tentakle.

**Lots** (maybe all) of the credit goes to
[foundation](http://foundation.zurb.com). I have taken many ideas and lots of
CSS code from their lib. I'm just not that big of a SCSS fan...


# Installation

```bash
$ npm install nibble
```

Make sure you also install [nib].

This is an example how you would include *nib* and *nibble* in your framework:

```javascript
var connect = require('connect')
  , stylus = require('stylus')
  , nib = require('nib')
  , nibble = require('nibble');

var server = connect();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib()
    .use(nibble());
}

server.use(stylus.middleware({
    src: __dirname
  , compile: compile
}));
```


# Documentation

To include all of nibble's elements you write this in your `.styl` file:

```stylus
@import "nibble"
```

This includes *nib* and all of *nibble's* functionality.

You can also cherrypick the components you want instead of importing the whole lib.
In this case, make sure that you include the `settings.styl` file

```stylus
@import "nibble/settings"
```

I'll add more documentation soon. Please refer to the nibble folder for now on
which elements exist.



[nib]: http://visionmedia.github.com/nib/