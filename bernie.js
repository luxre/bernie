/*!
 * Bernie.js 1.0.2
 * Copyright 2016 Who's Who in Luxury Real Estate
 * https://github.com/luxre/bernie
 */

var supportedServices = ['facebook', 'twitter', 'pinterest', 'linkedin', 'flipboard', 'tumblr', 'google-plus', 'email'];

var defaults = {
  services: ['facebook', 'twitter', 'pinterest', 'flipboard', 'tumblr', 'google-plus', 'email'],
  fill: 'white',
  width: 32,
  height: 32,
  logoSize: 32,
  borderRadius: 0,
  margin: 2,
  padding: 0,
  parentID: 'bernie'
}

var bernie = {

  init: function(options) {
    bernie.addButtons(options);
  },

  getMetaContent: function(tagName) {
      var tags = document.getElementsByTagName('meta');
      for (var i = 0; i < tags.length; i++) {
        if (tags[i].name == tagName) {
          return tags[i].content;
        }
      }
  },

  getTitle: function(service) {
    var title = bernie.getMetaContent('og:title');
    return title || document.title;
  },

  getText: function(service) {
    var text;
    if (service == 'twitter')
      text = bernie.getMetaContent('twitter:description');
    return text || bernie.getMetaContent('description');
  },

  getURL: function(service) {
    var shareURL = window.location.href;
    var title = bernie.getTitle(service);
    var text = bernie.getText(service);
    var image = bernie.getMetaContent('og:image');
    var paramsObj = {
      shareUrl: shareURL,
      title: escape(title),
      text: escape(text),
      image: image,
      shareUrlEncoded: function () {
        return encodeURIComponent(this.shareUrl);
      }
    };
    switch (service) {
      case 'facebook':
        return 'https://www.facebook.com/dialog/share?app_id=1120970454650257&display=popup&title=' + paramsObj.title + '&picture=' + image + '&description=' + paramsObj.text + '&href=' + paramsObj.shareUrlEncoded();
        break;
      case 'twitter':
        return 'https://twitter.com/intent/tweet?url=' + paramsObj.shareUrlEncoded() +
          '&text=' + paramsObj.title;
        break;
      case 'pinterest':
        return 'javascript:void((function()%7Bvar%20e=document.createElement(&apos;script&apos;);e.setAttribute(&apos;type&apos;,&apos;text/javascript&apos;);e.setAttribute(&apos;charset&apos;,&apos;UTF-8&apos;);e.setAttribute(&apos;src&apos;,&apos;https://assets.pinterest.com/js/pinmarklet.js?r=&apos;+Math.random()*99999999);document.body.appendChild(e)%7D)());'
        break;
      case 'linkedin':
        return 'https://www.linkedin.com/shareArticle?mini=true&url=' + paramsObj.shareUrlEncoded() + '&title=' + paramsObj.title + '&summary=' + paramsObj.text + '&source=' + window.location.hostname;
        break;
      case 'flipboard':
        return 'https://share.flipboard.com/bookmarklet/popout?v=2&title=' + paramsObj.title + '&url=' + paramsObj.shareUrlEncoded();
        break;
      case 'tumblr':
        return 'http://tumblr.com/widgets/share/tool?canonicalUrl=' + paramsObj.shareUrlEncoded();
        break;
      case 'google-plus':
        return 'https://plus.google.com/share?url=' + paramsObj.shareUrlEncoded();
        break;
      case 'email':
        return 'mailto:?subject=' + paramsObj.title + '&body=' + paramsObj.text + ' - ' + shareURL;
        break;
    }
  },

  getColor: function(service, options, force) {
    if (options.color && force === false) {
      return options.color;
    } else {
      switch (service) {
        case 'facebook':
          return 'rgb(59, 89, 152)';
          break;
        case 'twitter':
          return 'rgb(29, 161, 242)';
          break;
        case 'pinterest':
          return 'rgb(203, 32, 39)';
          break;
        case 'linkedin':
          return 'rgb(10, 102, 194)';
          break;
        case 'flipboard':
          return 'rgb(225, 40, 40)';
          break;
        case 'tumblr':
          return 'rgb(55, 69, 92)';
          break;
        case 'google-plus':
          return 'rgb(220, 78, 65)';
          break;
        case 'email':
          return 'rgb(85, 85, 85)';
          break;
       }
    }
  },

  getLogo: function(service, options) {
    var fill = options.fill == 'brand' ? bernie.getColor(service, options, true) : options.fill;
    switch (service) {
      case 'facebook':
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="bernie-icon bernie-icon-facebook" style="width:'+options.logoSize+'px; height:'+options.logoSize+'px;fill:' + fill + ';"><g><path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fill-rule="evenodd"></path></g></svg>';
        break;
      case 'twitter':
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="bernie-icon bernie-icon-twitter" style="width:'+options.logoSize+'px; height:'+options.logoSize+'px;fill:' + fill + ';"><g><path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fill-rule="evenodd"></path></g></svg>';
        break;
      case 'pinterest':
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="bernie-icon bernie-icon-pinterest" style="width:'+options.logoSize+'px; height:'+options.logoSize+'px;fill:' + fill + ';"><g><path d="M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z" fill-rule="evenodd"></path></g></svg>';
        break;
      case 'linkedin':
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="bernie-icon bernie-icon-linkedin" style="width:'+options.logoSize+'px; height:'+options.logoSize+'px;fill:' + fill + ';"><g><path d="m10.32175,26.17959l-4.23438,0l0,-13.63592l4.23438,0l0,13.63592zm-2.11948,-15.49598c-1.35402,0 -2.45227,-1.12151 -2.45227,-2.47553c0,-1.35435 1.09792,-2.45227 2.45227,-2.45227c1.35436,0 2.45228,1.09792 2.45228,2.45227c0,1.35402 -1.09872,2.47553 -2.45228,2.47553zm17.96741,15.49598l-4.22527,0l0,-6.63788c0,-1.58197 -0.0319,-3.61071 -2.20153,-3.61071c-2.20153,0 -2.5389,1.71873 -2.5389,3.49674l0,6.75185l-4.22983,0l0,-13.63592l4.06115,0l0,1.86006l0.05926,0c0.56532,-1.07136 1.94623,-2.20198 4.00643,-2.20198c4.28544,0 5.07323,2.82201 5.07323,6.48743l0,7.49041l-0.00455,0z"></g></svg>';
        break;
      case 'flipboard':
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="bernie-icon bernie-icon-flipboard" style="width:'+options.logoSize+'px; height:'+options.logoSize+'px;fill:' + fill + ';"><g><g fill-rule="evenodd"></g><path d="M6 6h6.667v20H6z"></path><path opacity=".9" d="M12.667 6H26v6.667H12.667z"></path><path opacity=".7" d="M12.667 12.667h6.667v6.667h-6.667z"></path></g></svg>';
        break;
      case 'tumblr':
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="bernie-icon bernie-icon-tumblr" style="width:'+options.logoSize+'px; height:'+options.logoSize+'px;fill:' + fill + ';"><g><path d="M19.59 22.176c-.392.186-1.14.348-1.695.362-1.682.045-2.008-1.18-2.022-2.07V13.93h4.218v-3.18H15.89V5.403h-3.076c-.05 0-.138.044-.15.157-.18 1.636-.947 4.51-4.133 5.66v2.71h2.124v6.862c0 2.35 1.733 5.688 6.308 5.61 1.544-.028 3.258-.674 3.637-1.23l-1.01-2.996" fill-rule="evenodd"></path></g></svg>';
        break;
      case 'google-plus':
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="bernie-icon bernie-icon-google-plus" style="width:'+options.logoSize+'px; height:'+options.logoSize+'px;fill:' + fill + ';"><g><path d="M12 15v2.4h3.97c-.16 1.03-1.2 3.02-3.97 3.02-2.39 0-4.34-1.98-4.34-4.42s1.95-4.42 4.34-4.42c1.36 0 2.27.58 2.79 1.08l1.9-1.83C15.47 9.69 13.89 9 12 9c-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.72-2.84 6.72-6.84 0-.46-.05-.81-.11-1.16H12zm15 0h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" fill-rule="evenodd"></path></g></svg>';
        break;
      case 'email':
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="bernie-icon bernie-icon-email" style="width:'+options.logoSize+'px; height:'+options.logoSize+'px;fill:' + fill + ';"><g><g fill-rule="evenodd"></g><path d="M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z"></path><path d="M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z"></path></g></svg>';
        break;
    }
    var image = '<img src="http://logok.org/wp-content/uploads/2014/04/Apple-Logo-rainbow.png" width=32 height=32 title="' + service + '"/>';
  },

  openPopup: function(url) {
    var w = 600;
    var h = 350;
    // Browser compatibility
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = screen.width;
    var height = screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 1.2)) + dualScreenTop;

    var newWindow = window.open(url, 'title', 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
  },

  createButton: function(service, options) {
    var url = bernie.getURL(service);
    var width = isNaN(options.width) ? options.width : options.width + 'px';
    var height = isNaN(options.height) ? options.height : options.height + 'px';
    var margin = isNaN(options.margin) ? options.margin : options.margin + 'px';
    var padding = isNaN(options.padding) ? options.padding : options.padding + 'px 0 0 ' + options.padding + 'px';
    var borderRadius = isNaN(options.borderRadius) ? options.borderRadius : options.borderRadius + 'px';
    switch (service) {
      case 'pinterest':
      case 'email':
        return '<a class="bernie-social-link bernie-' + service + '" href="' + url + '" style="cursor:pointer;display:inline-block;width:' + width + ';height:' + height + ';background-color:' + bernie.getColor(service, options, false) + ';border-radius:' + borderRadius + ';margin:' + margin + ';padding:' + padding + '">' + bernie.getLogo(service, options) + '</a>';
        break;
      default:
        return '<a class="bernie-social-link bernie-' + service + '" onClick="bernie.openPopup(\'' + url + '\')" style="cursor:pointer;display:inline-block;width:' + width + ';height:' + height + ';background-color:' + bernie.getColor(service, options, false) + ';border-radius:' + borderRadius + ';margin:' + margin + ';padding:' + padding + '">' + bernie.getLogo(service, options) + '</a>';
    }
  },

  addButtons: function(options) {
    if (options) {
      for (var prop in options) {
        defaults[prop] = options[prop];
      }
    }
    options = defaults;
    var parent = document.getElementById(options.parentID);
    var socialLinks = document.createElement('div');
    socialLinks.className = 'bernie-social-link-list';
    for (var i = 0; i < options.services.length; i++) {
      if (supportedServices.indexOf(options.services[i]) != -1) {
        socialLinks.innerHTML = socialLinks.innerHTML + bernie.createButton(options.services[i], options);
      }
    }
    if(parent) {
      parent.appendChild(socialLinks);
    }
  }

}

export {bernie};
