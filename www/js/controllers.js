angular.module('ionicApp.controllers', [])
.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate, $rootScope) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
  $scope.currentLoginUser = $rootScope.currentLoginUser;
})
.controller('HomeTabCtrl', function($scope) {

})
.controller('CustomerTabCtrl', function($scope) {

})
.controller('QuotationMenuCtrl', function($scope,$ionicSideMenuDelegate,$ionicSlideBoxDelegate) {
    $scope.showMenu = function () {
	    $ionicSideMenuDelegate.toggleLeft();
	  };
	  $scope.showRightMenu = function () {
	    $ionicSideMenuDelegate.toggleRight();
	};
	$scope.go2step = function(index) {
		$ionicSlideBoxDelegate.slide(index);
	};
})
.controller('QuotationTabCtrl', function($scope,$ionicSlideBoxDelegate) {
	$scope.go2step = function(index) {
		$ionicSlideBoxDelegate.slide(index);
	};
	$scope.products = [{id:1,type:1,name:"传统型生死合险",label:"eBao养老保险"}],
	$scope.genders = [{id:'M',name:"男"},{id:'F',name:"女"}];
	$scope.familyMembers = [{id:1,name:"陈海宇", birthday:"1986-07-24",gender:'F'},
	                        {id:2,name:"朱立梁", birthday:"1976-01-01",gender:'M'}],
	$scope.paymentTypes = [{id:1,name:"一次性缴"},{id:2,name:"分期缴"}];
	$scope.durations = [{value:20,label:"20年"},{value:30,label:"30年"}];
	$scope.paymentMethods = [{id:1,name:"一次性缴"},{id:2,name:"年缴"},{id:3,name:"半年缴"},{id:4,name:"季缴"},{id:5,name:"月缴"}];
	$scope.sumAssureds = [{value:200000,label:"20万"},{value:500000,label:"50万"},{value:1000000,label:"100万"},{value:2000000,label:"200万"},{value:3000000,label:"300万"}];
	$scope.otherSa = false;
	$scope.quotation = {
		product : $scope.products[0],
		policyHolder : $scope.familyMembers[0],
		premium : 0
	};
	
	$scope.setProduct = function(product){
		$scope.quotation.product = product;
		$scope.calPremium();
	};
	
	$scope.setPolicyHolder = function(familyMember) {
		$scope.quotation.policyHolder = familyMember;
		$scope.calPremium();
	};
	
	$scope.setGender = function(gender) {
		$scope.quotation.policyHolder.gender = gender.id;
		$scope.calPremium();
	};
	
	$scope.setPaymentType = function(paymentType) {
		$scope.quotation.paymentType = paymentType.id;
		$scope.calPremium();
	};
	
	$scope.setDuration = function(duration) {
		$scope.quotation.duration = duration.value;
		$scope.calPremium();
	};
	
	$scope.setPaymentMethod = function(paymentMethod) {
		$scope.quotation.paymentMethod = paymentMethod.id;
		$scope.calPremium();
	};
	
	$scope.setSumAssured = function(sumAssured) {
		$scope.otherSa = false;
		$scope.quotation.sa = sumAssured.value;
		$scope.calPremium();
	};
	
	$scope.selectOtherSa = function() {
		$scope.otherSa = true;
	};
	
	$scope.calculateAge = function(birthday) { // birthday is a date
	    var ageDifMs = Date.now() - birthday.getTime();
	    var ageDate = new Date(ageDifMs); // miliseconds from epoch
	    return Math.abs(ageDate.getUTCFullYear() - 1970);
	};
	
	$scope.calPremium = function() {
		var quotation = $scope.quotation;
		var policyHolder = quotation.policyHolder;
		if (!quotation.product.id || !policyHolder.id ||!policyHolder.birthday||!policyHolder.gender
				||!quotation.paymentType||!quotation.duration||!quotation.paymentMethod) {
			return;
		}
		var sa = quotation.sa;
		if ($scope.otherSa) {
			sa = quotation.otherSa;
		}
		if(!sa||sa=='') {
			return;
		}
		var age = $scope.calculateAge(new Date(policyHolder.birthday));
		var ageFactor = (60-age) * 0.12;
		var genderFactor = policyHolder.gender == 'M' ? 1.0 : 0.95;
		var paymentTypeFactor = quotation.paymentType == 1? 0.95 : 1.0;
		var paymentTime = 1;
		if (quotation.paymentMethod==1) {
			paymentTime = 1 * 1.1;
		} else if (quotation.paymentMethod==2) {
			paymentTime = age;
		} else if (quotation.paymentMethod==3) {
			paymentTime = age * 2;
		} else if (quotation.paymentMethod==4) {
			paymentTime = age * 4;
		} else if (quotation.paymentMethod==5) {
			paymentTime = age * 12;
		}
		quotation.premium = 0.001 * sa * ageFactor * genderFactor * paymentTypeFactor * quotation.duration / paymentTime;
		// to do save quotation to local storage
	};
})
.controller('SearchTabCtrl', function($scope) {

})
.controller('SyncTabCtrl', function($scope) {

})
.controller('SettingsTabCtrl', function($scope) {

})
.controller('AboutTabCtrl', function($scope) {

})
.controller('ContactTabCtrl', function($scope) {

});