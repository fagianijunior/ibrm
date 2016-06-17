angular.module('ibrm')
  .controller('MainCtrl', [
    '$scope', 'posts',
    function($scope, posts){
      $scope.posts = posts.posts;
      $scope.addPost = function(){
        if(!$scope.title || $scope.title === '') { return; }
        posts.create({
          title: $scope.title,
          content: $scope.content
        });
        $scope.title = '';
        $scope.content = '';
      };
    }])