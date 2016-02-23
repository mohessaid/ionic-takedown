angular.module('ionicTakeDown', ['ionic', 'sideMenuSwitcherPsycho'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
    
        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'core/sidemenu/templates/sidemenu.html',
        controller: 'theBigPsychoController'
      })
    
      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'core/settings/templates/general.html'
          }
        }
      });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/settings');
    });