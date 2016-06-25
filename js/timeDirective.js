angular.module('storeApp').directive('timeSnippet', function() {
  return {
    restrict: 'E',
    templateUrl: '../templates/time-snippet.html',
    // link:function (scope, elem, attrs) {
    //       scope.time = new Date();
    //       $interval(function() {
    //         scope.time = new Date();
    //       }, 1000)
    // }
    controller: function($scope, $interval) {
      $scope.time = new Date();
      $interval(function () {
        $scope.time = new Date();
      }, 10000);
    }
  }
})
