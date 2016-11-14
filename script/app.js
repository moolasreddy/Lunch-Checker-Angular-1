(function(){
  angular.module('LunchCheck', []).controller("LunchCheckController",["$scope",  LunchCheckController]);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.foodItems = "";
    $scope.message = "";

    $scope.calculateFoodQuantity = function(){
      $scope.items = $scope.foodItems.split(',');
    }
  }
})();
