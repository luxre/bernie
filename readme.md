# Bernie.js: Helping us all share a little more
![](images/share_cat.gif)  

A simple script to easily add social sharing links.

## Usage
To use bernie.js simply include the bernie.js script on your page, add a div with an id of `bernie` (or whatever you've set as the parentID), and then call it with `bernie.init();`. Bernie can also take an options object.

## Options

Bernie.js can be customized by taking an object with any of the following options:

**Services**
Bernie.js supports the following services:

* Facebook
* Twitter
* Pinterest
* Flipboard
* Tumblr
* Google-plus
* Email

The desired services can be set using the `services` option. This option takes an array of strings of service names. This also sets the order in which the links will appear on the page.

Default: `['facebook', 'twitter', 'pinterest', 'flipboard', 'tumblr', 'google-plus', 'email']`

**Background Color**
The background color of the buttons can be set by using the `color` option. If this option is not specifically set, service brand colors will be used.

Default: none (Brand Colors)

**Logo Color**
The color of the service logos within their parent button can be set using the `fill` option. This can also be set to 'brand' to use the brand color for each logo.

Default: `white`

**Height & Width**
The options `height` & `width` can be used to specify the height and width of the button link.
These options can take numbers and default to px, but can also take a sting if another unit is needed, i.e., '50%'

Default: `32`

**Logo Size**
The option `logoSize` can be set to adjust the size of the service logos within the link button.

Default: `32`

**Margins**
The `margin` option can be set to specify the margins between the buttons. This option takes a number or string. If is number is provided then it will be used for all sides and will be assumed to be in px. If a string is provided it will be used as is.

Default: `5`

**Padding**
The `padding` option can be used to move the logos around within their parent button. By default, logos are positioned to align with the top left edges of their button. They are also set to be the same size as their parent button which effectively 'centers' them in the button. This option can take a number. This number will be assumed to be in `px` and set the top and left padding. The `padding` option can also take a string which will be used as is.

Default: `0`

**Border Radius**
The `borderRadius` option can be used to create rounded corners for the buttons or even set them to be circles. This option takes a number and defaults to `px`. This will be used for all four corners. It can also take a string, which will be used as is.

Default: `0`

**Parent Container**
Bernie needs to know where to put these shiny new social sharing links. The `parentID` option takes a string and can be used to set the ID of the parent container into which bernie will add the social sharing links. This container does not have to be empty. The social links will be added after any existing content in this parent container.

parentID: `bernie`

## Custom CSS
Beyond the options above, these social links can be further styled using custom CSS. Bernie exposes the following classes:

**.bernie-social-link-list**
This is a container that holds everything that bernie adds to the page, all the social links.

**.bernie-social-link**
This class is added to each individual link

**.bernie-{service}**
A service specific class is added to each individual link as well. (`.bernie-facebook`)

**.bernie-icon**
This class is added to each service logo svg

**.bernie-icon-{service}**
A service specific class is also added to each svg logo as well. (`.bernie-icon-facebook`)

## Examples
**Default**
![](images/example_1.jpg)
```
bernie.init();
```

**Example 2**
![](images/example_2.jpg)
```
bernie.init({
  color: 'transparent',
  fill: 'brand',
  logoSize: 40,
  width: 40
});
```

**Example 3**
![](images/example_3.jpg)
```
bernie.init({
  services: ['twitter', 'facebook', 'pinterest', 'google-plus'],
  color: '#104673',
  height: 80,
  width: 80,
  logoSize: 50,
  borderRadius: 40,
  padding: 15
});
```
