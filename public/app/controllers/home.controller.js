var HomeCtrl = function($scope, $location){
  $scope.collectors = [
    {
      name: 'Telegraf',
      logo: 'assets/images/telegraf.png'
    }
  ];

  $scope.outputs = [
    {
      name: 'InfluxDB',
      logo: 'assets/images/influxdb.png'
    },
    {
      name: 'ElasticSearch',
      logo: 'assets/images/elasticsearch.png'
    },
    {
      name: 'Graphite',
      logo: 'assets/images/graphite.png'
    },
    {
      name: 'Graylog',
      logo: 'assets/images/graylog.png'
    },
    {
      name: 'AWS CloudWatch',
      logo: 'assets/images/cloudwatch.png'
    }
  ];

  $scope.configure = function(){
    $location.path('/configuration');
  };
};

angular.module('app.controllers')
  .controller('HomeCtrl', HomeCtrl);
