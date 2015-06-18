
/*
 * JavaScript MD5 1.0.1
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 * 
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.md5=t}(this);

var InlineScript = function(scriptData) {
  this.data = scriptData;
  this.evaluated = false;

  this.fetch = function(callback) {
    callback();
  }

  this.evaluate = function() {
    if (this.evaluated)
      return;

    var e = eval;
    e(this.data);
    this.evaluated = true;
  };

  this.loaded = function() {
    return this.evaluated;
  };

  this.ready = function() {
    return true;
  }
};

var RemoteScript = function(srcLocation) {
  var self = this;
  var evaluated = false;

  this.src = {
    location : srcLocation,
    data : null
  };

  this.fetch = function(callback) {
    HttpService.get(this.src.location, function(resultData) {
      self.src.data = resultData;
      callback();
    });
  };

  this.evaluate = function() {
    if (evaluated)
      throw new Error("Already been evaluated");
    if (this.src.data == null)
      throw new Error("Unable to evaluate. Source data hasn't been loaded yet - " + this.src.location);
    var e = eval;
    e(this.src.data);
    evaluated = true;
  };

  this.loaded = function() {
    return evaluated;
  };

  this.ready = function() {
    return this.src.data != null;
  };

};


var SignedScript = function(srcLocation, keyId) {
  var self = this;
  var evaluated = false;
  var verified = null;
  var requestedScript = new RemoteScript(srcLocation);

  this.signature = {
    location : srcLocation + ".asc",
    data : null
  };

  this.key = {
    id : keyId,
    data : null
  };

  this.evaluate = function() {
    if (this.key.data == null)
      throw new Error("Unable to evaluate. Key hasn't loaded yet");
    if (!verified != null && verified === false)
      throw "Unable to load, as verification already failed";

    verified = false;
    if (VerifyService.verify(requestedScript.src, this.signature, this.key)) {
      verified = true;
      var e = eval; 
      e(requestedScript.src.data);
      console.log("-- " + requestedScript.src.location + " loaded successfully");
    }
    evaluated = true;
  };

  this.fetch = function(callback) {
    var count = 0;

    requestedScript.fetch(function() {
      if (++count == 3)
        callback();
    });

    HttpService.get(this.signature.location, function(sigData) {
      self.signature.data = sigData;
      if (++count == 3)
        callback();
    });

    KeyService.fetch(this.key.id, function(keyData) {
      self.key.data = keyData;
      if (++count == 3)
        callback();
    });
  };

  this.loaded = function() {
    return evaluated;
  };

  this.ready = function() {
    if (verified === false)
      return false;
    return requestedScript.src.data != null && this.signature.data != null && this.key.data != null;
  };

};


var HttpService = new (function() {
  this.get = function(url, callback) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.status == 200) {
        callback(req.responseText);
      }
      else {
        throw new Error(req.statusText);
      }
    };

    req.onerror = function() {
      throw new Error("Network Error");
    };

    req.send();
  };
})();


var KeyService = new (function() {
  var baseUrl = "http://keyserver.cns.vt.edu/pks/lookup?op=get&search=";
  var callbacks = {};

  var getProxyUrl = function(url) {
    var easyUrl = parseURL(url);
    // return 'http://localhost/~mikesir/tests/keyserver.html'; 
    return "http://crossorigin.me/" + easyUrl.host + easyUrl.pathname + easyUrl.search;
  };

  var parseURL = function(url) {
    var parser = document.createElement('a');
    parser.href = url;
    return {
      protocol: parser.protocol,
      host: parser.host,
      hostname: parser.hostname,
      port: parser.port,
      pathname: parser.pathname,
      search: parser.search,
      hash: parser.hash
    };
  };

  this.fetch = function(keyId, callback) {
    if (localStorage.getItem("key-" + keyId) != null) {
      callback(localStorage.getItem("key-" + keyId));
    }
    else {
      if (typeof callbacks[keyId] == 'undefined') {
        callbacks[keyId] = Array();
        HttpService.get(getProxyUrl(baseUrl + keyId), function(keyData) {
          localStorage.setItem("key-" + keyId, keyData);
          for (var i = 0; i < callbacks[keyId].length; i++)
            callbacks[keyId][i](keyData);
        });
      }
      callbacks[keyId].push(callback);
    }
  };
})();

var VerifyService = new (function() {
  this.verify = function(src, signature, key) {
    var md5Location = md5(src.location);
    if (localStorage.getItem('script-' + md5Location) != null) {
      if (localStorage.getItem('script-' + md5Location) == md5(src.data)) {
        console.log("-- Stored hash for " + src.location + " matches. Skipping signature verification");
        return true;
      }
      else
        console.log("-- Stored hash for " + src.location + " didn't verify. Verifying signature now");
    } 

    var msg = openpgp.message.readSignedContent(src.data, signature.data);
    var publicKey = openpgp.key.readArmored(key.data);
    var verified = msg.verify(publicKey.keys);

    if (!verified || verified.length <= 0 || !verified[0].valid) {
      throw new Error("Signature for " + src.location + " failed validation");
    }
    else {
      console.log("-- " + src.location + " verified. Storing md5 hash for quicker evaluation in the future");
      localStorage.setItem('script-' + md5(src.location), md5(src.data));
      return true;
    }    
  }
})();



var ScriptService = new (function() {
  var self = this;
  var scripts = Array();

  this.init = function() {
    var signedElements = document.querySelectorAll("script[type^='text/x-javascript-']");
    for (var i = 0; i < signedElements.length; i++) {
      var element = signedElements[i];
      var src = element.src;

      if (element.type === 'text/x-javascript-signed') {
        var keyId = element.dataset.keyId;
        scripts.push(new SignedScript(element.src, keyId));        
      } else if (src != null && src != "") {
        scripts.push(new RemoteScript(src));
      } else {
        scripts.push(new InlineScript(element.innerText));
      }
    }

    console.log("-- The following scripts were discovered:", scripts);

    for (var i = 0; i < scripts.length; i++) {
      fetchScript(i);
    }
  };

  var fetchScript = function(index) {
    var script = scripts[index];
    script.fetch(function() {
      checkScript(script);
    });
  };

  var checkScript = function(script, index) {
    if (!script.ready()) {
      console.log("doesn't appear to be ready", script);
      return;
    }
    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];
      if (!script.ready())
        return;
      if (!script.loaded()) {
        script.evaluate();
      }
    }
  }

})();



window.addEventListener('DOMContentLoaded', function () {
  ScriptService.init();
}, false);

