(function() {
  window.addEventListener("load", launchController);

  var waiting = 2;

  function launchController() {
    waiting--;

    if (waiting === 0) {
      document.querySelector("html").classList.add("aframe-launch");

      var _event = new CustomEvent("aframe-launch", {});
      window.dispatchEvent(_event);
    }
  }

  AFRAME.registerComponent("launch-controller", {
    schema: {
    },

    init: function() {
      launchController();
    }
  });
})();
