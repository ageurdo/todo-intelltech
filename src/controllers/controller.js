// Define the `phonecatApp` module



var todoApp = angular.module('todoApp', []);

function truncate(input) {
  if (input.length > 5) {
    return input.substring(0, 5) + '...';
  }
  return input;
};

todoApp
  .controller('webapi', ['$scope', '$http', consulta]);

function consulta ($scope, $http, webapi) {
  $http.get('https://localhost:44384/api/users').
    then(function (response) {
      $scope.users = response.data;
      console.log($scope.users, "Users - GetALl");
    }
    );
    
    $http.get('https://localhost:44384/api/boards').
    then(function (response) {
      $scope.boards = response.data;
    });
    
    $http.get('https://localhost:44384/api/statustask').
    then(function (response) {
      $scope.statustask = response.data;
    });
    
    $http.get('https://localhost:44384/api/tasks').
    then(function (response) {
      
      arrayObj = response.data;
      arrayObj.forEach(x => {
        str = x.user.name.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '');
        if (str.length == 1)
        x.user.nickName = x.user.name.slice(0, 2).toUpperCase(); 
        else
        x.user.nickName = x.user.name.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '').slice(0, 2);        
      });
      
      $scope.tasks = arrayObj;
      console.log($scope.tasks, "tasks - GetAll");

      
      
    });

}