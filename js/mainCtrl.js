angular.module('storeApp').controller('mainCtrl', function($scope) {

  // $scope.test = "what?"
  $scope.products = [
    {
      name: 'Sandals',
      url: '/sandals.html',
      src: 'http://images.anthropologie.com/is/image/Anthropologie/39103973_041_b'
    },
    {
      name: 'Ring',
      url: '/ring.html',
      src: 'http://images.anthropologie.com/is/image/Anthropologie/36612836_070_b'
    }
  ]

});
