angular.module('app.services')
  .factory('ConfigurationFactory', function(){
    var self = this;

    var configuration;

    self.setConfiguration = function(configuration){
      this.configuration = configuration;
    };

    self.getConfiguration = function(){
      return this.configuration;
    };

    return self;
  });
