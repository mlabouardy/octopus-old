var HomeCtrl = function($scope){
  $scope.inputs = [
    {
      name: 'Telegraf',
      logo: 'assets/images/elasticsearch.png'
    },
    {
      name: 'Collectd',
      logo: 'assets/images/elasticsearch.png'
    },
    {
      name: 'Diamond',
      logo: 'assets/images/elasticsearch.png'
    }
  ];

  $scope.ouputs = [
    {
      name: 'InfluxDB',
      logo: 'assets/images/elasticsearch.png'
    },
    {
      name: 'ElasticSearch',
      logo: 'assets/images/elasticsearch.png'
    },
    {
      name: 'Graphite',
      logo: 'assets/images/elasticsearch.png'
    }
  ]
};

angular.module('app.controllers')
  .controller('HomeCtrl', HomeCtrl);
