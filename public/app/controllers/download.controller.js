var DownloadCtrl = function($scope, $location){

  $scope.previous = function(){
    $location.path('/configuration');
  };
};

angular.module('app.controllers')
  .controller('DownloadCtrl', DownloadCtrl);
