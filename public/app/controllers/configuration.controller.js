var ConfigurationCtrl = function($scope, $location){

  $scope.previous = function(){
    $location.path('/');
  };

  $scope.generate = function(){
    $location.path('/download');
  };
};

angular.module('app.controllers')
  .controller('ConfigurationCtrl', ConfigurationCtrl);
