'use strict';

(function() {
  angular
    .module('app.core')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider){
    $stateProvider.state('rating', {
      url: '/',
      templateUrl: 'client/app/features/rating/rating.html',
      controller: 'RatingController',
      controllerAs: 'vm',
      resolve:{
        dogs: getDogs
      }
    }).state('leaderboard', {
      url: '/leaderboard',
      templateUrl: 'client/app/features/leaderboard/leaderboard.html',
      controller: 'LeaderboardController',
      controllerAs: 'vm',
      resolve:{
        results: getDogs
      }
    });
    $urlRouterProvider.otherwise('/');
  }

  getDogs.$inject = ['animalService'];
  function getDogs(animalService) {
    return animalService.getDogs();
  }

})();
