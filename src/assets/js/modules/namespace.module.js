var namespace = namespace || {};

namespace.module = (function () {

  function init() {

    console.log('%c Module loaded', 'background: #222; color: #bada55');

  }

  return {
    init: init
  };

})();
