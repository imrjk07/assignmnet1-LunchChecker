(function () {
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope', '$filter'];
    function MsgController($scope){
      $scope.lunchChecker = function () {
        if ($scope.lunchItems === "" || $scope.lunchItems===',') {
          $scope.message = "Please enter data first";
        } else {
          $scope.items = $scope.lunchItems.split(',');
          $scope.count = $scope.items.length;
          if( $scope.items[$scope.count -1 ] === ""){
            $scope.message="Yes Spaces";
            $scope.count = $scope.count - 1;
          }
          if ($scope.count <= 3) {
            $scope.message = "Enjoy!"
          } else {
            $scope.message = "Too Much!"
          }
        }
      }
    }
})();
