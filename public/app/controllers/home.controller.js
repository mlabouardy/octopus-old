var HomeCtrl = function($scope, $location, ConfigurationFactory){
  $scope.collectors = [
    {
      name: 'telegraf',
      logo: 'assets/images/telegraf.png',
      selected: false
    }
  ];

  $scope.outputs = [
    {
      name: 'influxdb',
      logo: 'assets/images/influxdb.png',
      selected: false
    },
    {
      name: 'elasticsearch',
      logo: 'assets/images/elasticsearch.png',
      selected: false
    },
    {
      name: 'graphite',
      logo: 'assets/images/graphite.png',
      selected: false
    },
    {
      name: 'graylog',
      logo: 'assets/images/graylog.png',
      selected: false
    },
    {
      name: 'cloudwatch',
      logo: 'assets/images/cloudwatch.png',
      selected: false
    }
  ];

  $scope.getSelectedItems = function(list){
    var tmp = list.filter(function(item){
      return item.selected;
    });
    var output = [];
    tmp.forEach(function(item){
      output.push(item.name);
    });
    return output;
  };

  $scope.configure = function(){
    $scope.error = false;
    var selectedCollector = $scope.getSelectedItems($scope.collectors);
    var selectedOutputs = $scope.getSelectedItems($scope.outputs);
    if(selectedCollector.length > 0 && selectedOutputs.length > 0){
      //pass
      ConfigurationFactory.setConfiguration({
        collector: selectedCollector[0],
        outputs: selectedOutputs
      });

      $location.path('/configuration');
    }else{
      $scope.error = true;
    }
  };

  $scope.onSelectColector = function($event, item){
    item.selected = !item.selected;
  };
};

angular.module('app.controllers')
  .controller('HomeCtrl', HomeCtrl);
