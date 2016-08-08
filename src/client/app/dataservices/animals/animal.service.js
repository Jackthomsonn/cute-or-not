'use strict';
(function() {
  angular
    .module('app.animalservice')
    .factory('animalService', animalService);

  animalService.$inject = ['$resource'];
  function animalService($resource) {
    var service = {
      getDogs: getDogs,
      addVote: addVote,
      animals: $resource('api/animals/:id', null, {update: {method:'PUT'}})
    };

    return service;

    function getDogs() {
      return this.animals.query().$promise.then(function(animals) {
        return animals;
      });
    }

    function addVote(id, answer) {
      return this.animals.update({id: id}, answer).$promise;
    }
  }
})();
