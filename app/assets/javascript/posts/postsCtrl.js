angular.module('ibrm')
  .controller('PostsCtrl', [
    '$scope',
    'posts',
    'post',
    function($scope, posts, post) {
      $scope.post = post;
    }]);