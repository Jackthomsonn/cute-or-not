'use strict';
(function() {
  angular
    .module('app.leaderboard', [])
    .controller('LeaderboardController', LeaderboardController);

  LeaderboardController.$inject = ['results'];
  function LeaderboardController(results) {
    var vm = this;
    vm.results = results;
    vm.orderByState = 'cuteness';
    vm.orderBy = '-cute';
    vm.changeOrderBy = changeOrderBy;

    function changeOrderBy() {
      if(vm.orderByState === 'cuteness') {
        vm.orderByState = 'not so cute';
        vm.orderBy = '-not';
      } else {
        vm.orderByState = 'cuteness';
        vm.orderBy = '-cute';
      }
    }
  }
})();
