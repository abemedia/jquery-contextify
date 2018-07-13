# jQuery Contextify - Lightweight Context Menu

A lightweight jQuery plugin for creating Bootstrap powered context menus.

[![CDNJS](https://img.shields.io/cdnjs/v/jquery-contextify.svg)](https://cdnjs.com/libraries/jquery-contextify)
[![Build Status](https://travis-ci.org/abeMedia/jquery-contextify.svg?branch=master)](https://travis-ci.org/abeMedia/jquery-contextify)
[![Dependency Status](https://dependencyci.com/github/abeMedia/jquery-contextify/badge)](https://dependencyci.com/github/abeMedia/jquery-contextify)

## Setup

This version supports `Bootstrap4` but you can change some options, just like the example, below to support `Bootstrap3` or `other front framework`.

**Attention: That change has modified by Jokin and the cdn file may not be Jokin's version! You should download and use it untill the offician merges this version.**

### Load from CDN

The easiest way to get up and running is to load jQuery Contextify using a CDN. Make sure jQuery is loaded first though.

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-contextify/1.0.8/jquery.contextify.min.js"></script>
```
or
```html
<script src="//cdn.jsdelivr.net/jquery.contextify/1.0.8/jquery.contextify.min.js"></script>
```

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
- [Download Jokin's latest version(Support more front framework)](https://github.com/jokin1999/jquery-contextify/archive/master.zip)
- or `Origin version` `curl -O https://raw.github.com/abeMedia/jquery-contextify/master/dist/jquery.contextify.js`
- `Jokin's version` `curl -O https://raw.github.com/jokin1999/jquery-contextify/master/dist/jquery.contextify.js`


## Usage

jQuery Contextify needs to be activated via JavaScript.

```js
$('.foo').contextify(options);
```
The menu items are passed as an array in `options.items`. See the following example for creating a basic context menu.

```html
<a class="foo" href="#" data-name="John">Click me</a>

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-contextify/1.0.8/jquery.contextify.min.js"></script>
<script>
var options = {items:[
  {header: 'Options'},
  {text: 'First Link', href: '#'},
  {text: 'Second Link', onclick: function(e) {
    alert('Hello ' + e.data.name);
  }},
  {divider: true},
  {text: 'Stuff', href: '#'}
]}
$('.foo').contextify(options);
</script>
```
This will initiate jQuery Contextify on the `.foo` elements with the menu items specified in `options.items`.


## Support for Bootstrap3.x

```html
<a class="foo" href="#" data-name="John">Click me</a>

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-contextify/1.0.8/jquery.contextify.min.js"></script>
<script>
var options = {items:[...],
  dividerClass: 'divider',  // Support for Bootstrap3
}
$('.foo').contextify(options);
</script>
```

### Options

| Name      | Type | Default | Description |
|-----------|------|---------|-------------|
| `items`  | array  | [] | An array of menu item objects. |
| `action`  | string  | `contextmenu` | The action on which to display the context menu (can be `contextmenu`, `click` or `mouseover`). |
| `menuId` | string | `contextify-menu` | The `id` attribute of the context menu. |
| `menuClass` | string | `dropdown-menu` | The `class` attribute of the context menu. |
| `itemClass` | string | `dropdown-item` | The `class` attribute of menu dividers. |
| `headerClass` | string | `dropdown-header` | The `class` attribute of menu headers. |
| `dividerClass` | string | `dropdown-divider` | The `class` attribute of menu dividers. |


## Copyright

&copy; 2014-2016 Adam Bouqdib - http://abemedia.co.uk
