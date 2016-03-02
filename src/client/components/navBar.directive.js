(function() {
  angular
    .module('app.components')
    .directive('navBar', navBar);

  function navBar() {
    return {
      restrict: 'E',
      templateUrl: 'src/client/components/navBar.html',
      controller: NavBarCtrl,
      controllerAs: 'vm',
      scope: {}
    };
  }

  function NavBarCtrl() {
    var vm = this;
  }
})();