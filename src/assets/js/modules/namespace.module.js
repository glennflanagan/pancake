var namespace = namespace || {};

namespace.module = (function () {

  'use strict';

  function init() {
    console.log('%c Module loaded ', 'background: #222; color: #bada55');
  }

  return {
    init: init
  };

})();
