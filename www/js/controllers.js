angular.module('ionicApp.controllers', [])
.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})
.controller('HomeTabCtrl', function($scope,$ionicModal,$timeout) {

})
.controller('CustomerTabCtrl', function($scope,$ionicModal,$timeout) {

})
.controller('QuotationTabCtrl', function($scope,$ionicModal,$timeout) {

})
.controller('SearchTabCtrl', function($scope,$ionicModal,$timeout) {

})
.controller('SyncTabCtrl', function($scope,$ionicModal,$timeout) {

})
.controller('SettingsTabCtrl', function($scope,$ionicModal,$timeout) {

})
.controller('AboutTabCtrl', function($scope,$ionicModal,$timeout) {

})
.controller('ContactTabCtrl', function($scope,$ionicModal,$timeout) {

});