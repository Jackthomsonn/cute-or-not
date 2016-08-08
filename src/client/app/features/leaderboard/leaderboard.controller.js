'use strict';
(function() {
  angular
    .module('app.leaderboard', [])
    .controller('LeaderboardController', LeaderboardController);

  LeaderboardController.$inject = ['results'];
  function LeaderboardController(results) {
    var vm = this;
    vm.results = results;
  }
})();
