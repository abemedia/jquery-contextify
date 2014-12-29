# jQuery Contextify - Lightweight Context Menu

A lightweight jQuery plugin for creating Bootstrap powered context menus.

## Setup

### Install with Bower 

Use the following command to install jQuery Contextify using [bower](https://github.com/twitter/bower).

```
$ bower install jquery-contextify
```

Or simply add `jquery-contextify` to your project's `bower.json`.

``` json
  "dependencies": {
    "jquery-contextify": "latest"
  }
```

### Download 

You can also just download the latest package.

- [Download latest version](https://github.com/abeMedia/jquery-contextify/archive/master.zip)
- or `curl -O https://raw.github.com/abeMedia/jquery-contextify/master/dist/jquery.contextify.js`


## Usage

jQuery Contextify needs to be activated via JavaScript.

```javascript
var options = {items:[
  {header: 'Options'},
  {text: 'First Link', href: '#'},
  {text: 'Second Link', onclick: function() {}},
  {divider: true},
  {text: 'Stuff', href: '#'}
]}
$('.foo').contextify(options);
```
This will initiate jQuery Contextify on the `.foo` elements with the menu items specified in `options.items`.

## Copyright

&copy; 2014 Adam Bouqdib - http://abemedia.co.uk
