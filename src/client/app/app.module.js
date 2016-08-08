'use strict';
(function() {
  angular
    .module('app', [
      'app.features',
      'app.dataservices',
      'app.components',
      'app.core',
      'ngResource'
    ])
    .run(['$rootScope', '$location', '$state', '$stateParams', function ($rootScope, $location, $state, $stateParams, userService) {
      $rootScope.$state = $state;
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.loading = true;
      });
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.loading = false;
      });
    }]);
})();
