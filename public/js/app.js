var app = angular.module('myApp', []);

app.controller('NameController'), ['$http', function($http) {


  $http.get('/js/name.json')
    .success(function(data){
      _this.name = data;
    })
    .error(function(msg){
      console.log("This request failed.\n");
    });
  
}]);
