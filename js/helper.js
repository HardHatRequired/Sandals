angular.module('storeApp').directive('sendTo', function() {

  return {
    restrict: 'A',
    controller: function($scope) {
      // console.log($scope);
    },
    link: function(scope, elem, attrs) {
      // console.log("scope", scope);
      // console.log("elem", elem);
      // console.log("attrs", attrs)
      elem.on("click", function() {
        window.location = attrs.sendTo;
    });
    }
  }

})
