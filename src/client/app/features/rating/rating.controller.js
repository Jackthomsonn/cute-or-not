'use strict';
(function() {
  angular
    .module('app.rating', [])
    .controller('RatingController', RatingController);

  RatingController.$inject = ['dogs', 'animalService', '$rootScope'];
  function RatingController(dogs, animalService, $rootScope) {
    var vm = this,
      index = 0,
      answer;
    vm.dog = dogs[index];
    vm.vote = vote;
    vm.valid = true;

    function vote(dogId, answer) {
      if(index < dogs.length) {
        if(answer === 'cute') {
          answer = {cute: dogs[index].cute + 1};
          index++;
          vm.dog = dogs[index];
        }
        if(answer === 'not') {
          answer = {not: dogs[index].not + 1};
          index++;
          vm.dog = dogs[index];
        }
        $rootScope.loading = true;
        animalService.addVote(dogId, answer).then(function() {
          $rootScope.loading = false;
        });
      }
      if(index === dogs.length) {
        vm.valid = false;
        vm.dog = {
          image: 'thats-all-folks'
        };
      }
    }
  }
})();
