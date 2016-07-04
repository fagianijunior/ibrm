angular.module('ibrm')
  .controller('NavCtrl', [
    '$scope',
    'Auth',
    function($scope, Auth) {
      $scope.signedIn = Auth.isAuthenticated;
      $scope.logout = Auth.logout;

      Auth.currentUser().then(function(user) {
        $scope.user = user;
      });

      $scope.$on('devise:new-registration', function(e, user) {
        $scope.user = user;
      });
      $scope.$on('devise:login', function(e, user) {
        $scope.user = user;
      });
      $scope.$on('devise:logout', function(e, user) {
        $scope.user = {};
      });

      //Dropdow menu
      $scope.status = {
        isopen: false
      };

      $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };

      $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

    }]);
