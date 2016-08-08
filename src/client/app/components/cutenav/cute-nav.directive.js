'use strict';

(function() {
  angular
    .module('app.components')
    .directive('cuteNav', cuteNav);

  function cuteNav() {
    var directive = {
      templateUrl: 'client/app/components/cutenav/cute-nav.html',
      restrict: 'EA',
      controller: CuteNavController,
      controllerAs: 'vm',
      bindToController: true,
      link: function (scope, elem, attrs) {
        scope.show = false;
        scope.cuteMenu = function() {
          if(!scope.show) {
            scope.show = true;
          } else if(scope.show){
            scope.show = false;
          }
        };
        scope.clicked = function() {
          scope.show = false;
        };
      }
    };
    return directive;
  }
  CuteNavController.$inject = ['$rootScope'];
  function CuteNavController($rootScope) {
    var vm = this;
    $rootScope.showMenu = showMenu;
    $rootScope.hideMenu = hideMenu;

    function checkSize() {
      window.addEventListener('resize', function() {
        if($rootScope.isOpen && document.body.clientWidth < 1100) {
          $rootScope.isOpen = false;
          $rootScope.$apply();
        } else if(document.body.clientWidth > 1100) {
          $rootScope.isOpen = true;
          $rootScope.$apply();
        }
      }, true);
    }

    function showMenu() {
      if($rootScope.isOpen && document.body.clientWidth < 1100) {
        $rootScope.isOpen = false;
      } else if(!$rootScope.isOpen && document.body.clientWidth < 1100) {
        $rootScope.isOpen = true;
      }
      else if($rootScope.isOpen && document.body.clientWidth < 1100) {
        $rootScope.isOpen = false;
      }
    }

    function hideMenu() {
      if(document.body.clientWidth < 1100) {
        $rootScope.isOpen = false;
      }
    }
  }

})();
