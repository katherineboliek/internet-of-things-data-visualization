var app = angular.module('myApp', []);

app.controller('ExampleController'), ['$http', function($http) {

  this.examples = [];
  this.activeExample = "";
  var _this = this;

  $http.get('/js/examples.json')
    .success(function(data){
      _this.examples = data;
      // console.log("success");
    })
    .error(function(msg){
      console.log("This request failed.\n");
    });

}];
