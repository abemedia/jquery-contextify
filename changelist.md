Added & changed some options
```
defaults = {
    items: [],
    action: "contextmenu",
    menuId: "contextify-menu",
    menuClass: "dropdown-menu",
    itemClass: "dropdown-item",
    headerClass: "dropdown-header",
    dividerClass: "dropdown-divider",
    before: false
},
```

`if` added
```
if (options.itemClass !== ''){
  el.append('<a class="' + options.itemClass + '"/>');
}else{
  el.append('<a/>');
}
```
