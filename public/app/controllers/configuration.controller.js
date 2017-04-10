var ConfigurationCtrl = function($scope, $location, ConfigurationFactory, $window){

  $scope.items = [
    {
      name : "CPU",
      selected: false
    },
    {
      name : "DISK",
      selected: false
    },
    {
      name : "NETWORK",
      selected: false
    },
    {
      name : "MEMORY",
      selected: false
    },
    {
      name : "SWAP",
      selected: false
    },
    {
      name : "System",
      selected: false
    }
  ]

  if(!ConfigurationFactory.getConfiguration()){
    if($window.localStorage.getItem('configuration')){
      $scope.configuration = ConfigurationFactory.setConfiguration(JSON.parse($window.localStorage.getItem('configuration')));
    }else{
      $location.path('/');
    }
  }

  $scope.configuration = ConfigurationFactory.getConfiguration();
  $window.localStorage.setItem('configuration', JSON.stringify($scope.configuration));

  $scope.previous = function(){
    $location.path('/');
  };

  $scope.generate = function(){
    $location.path('/download');
  };
};

angular.module('app.controllers')
  .controller('ConfigurationCtrl', ConfigurationCtrl);
