var app = angular.module('myApp', []);

app.controller('ExampleController', ['$http', function($http) {

  this.examples = [];
  // this.activeExample = "";
  var _this = this;

  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  };

  $http.get('/js/examples.json')
    .success(function(data){
      _this.examples = data;
      //console.log("success");
    })
    .error(function(msg){
      console.log("This request failed.\n");
    });

}]);
