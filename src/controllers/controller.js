// Define the `phonecatApp` module
var todoApp = angular.module('todoApp', []);


todoApp
  .controller('webapi', ['$scope', '$http', consulta]);

function consulta ($scope, $http, webapi) {
  $http.get('https://localhost:5001/api/users').
    then(function (response) {
      $scope.users = response.data;
      console.log($scope.users, "Users - GetALl");
    }, function () {
      console.log("pau")
    }
    );
  
  $http.get('https://localhost:5001/api/boards').
    then(function (response) {
      $scope.boards = response.data;
    });

  $http.get('https://localhost:5001/api/statustask').
    then(function (response) {
      $scope.statustask = response.data;
    });

  $http.get('https://localhost:5001/api/tasks').
    then(function (response) {
      $scope.tasks = response.data;
    });

}