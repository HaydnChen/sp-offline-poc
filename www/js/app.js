angular.module('ionicApp', [ 'ionic', 'ionicApp.controllers' ])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('tabs', {
		url : "/tab",
		abstract : true,
		templateUrl : "templates/tabs.html"
	}).state('tabs.homeMain', {
		url : "/home/main",
		views : {
			'home-tab@tabs' : {
				templateUrl : "templates/home/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.homeMain' : {
				templateUrl : "templates/home/main.html",
				controller : 'HomeTabCtrl'
			}
		}
	}).state('tabs.homeFacts', {
		url : "/home/facts",
		views : {
			'home-tab@tabs' : {
				templateUrl : "templates/home/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.homeFacts' : {
				templateUrl : "templates/home/facts.html",
				controller : 'HomeTabCtrl'
			}
		}
	}).state('tabs.homeFacts2', {
		url : "/home/facts2",
		views : {
			'home-tab@tabs' : {
				templateUrl : "templates/home/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.homeFacts2' : {
				templateUrl : "templates/home/facts2.html",
				controller : 'HomeTabCtrl'
			}
		}
	}).state('tabs.customerMain', {
		url : "/customer/main",
		views : {
			'customer-tab@tabs' : {
				templateUrl : "templates/customer/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.customerMain' : {
				templateUrl : "templates/customer/main.html",
				controller : 'CustomerTabCtrl'
			}
		}
	}).state('tabs.customerNew', {
		url : "/customer/new",
		views : {
			'customer-tab@tabs' : {
				templateUrl : "templates/customer/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.customerNew' : {
				templateUrl : "templates/customer/new.html",
				controller : 'CustomerTabCtrl'
			}
		}
	}).state('tabs.customerOld', {
		url : "/customer/old",
		views : {
			'customer-tab@tabs' : {
				templateUrl : "templates/customer/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.customerOld' : {
				templateUrl : "templates/customer/old.html",
				controller : 'CustomerTabCtrl'
			}
		}
	}).state('tabs.quotationMain', {
		url : "/quotation/main",
		views : {
			'quotation-tab@tabs' : {
				templateUrl : "templates/quotation/menu.html",
				controller : 'QuotationMenuCtrl'
			},
			'menuContent@tabs.quotationMain' : {
				templateUrl : "templates/quotation/main.html",
				controller : 'QuotationTabCtrl'
			}
		}
	}).state('tabs.quotationNew', {
		url : "/quotation/new",
		views : {
			'quotation-tab@tabs' : {
				templateUrl : "templates/quotation/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.quotationNew' : {
				templateUrl : "templates/quotation/new.html",
				controller : 'QuotationTabCtrl'
			}
		}
	}).state('tabs.quotationStep2', {
		url : "/quotation/step2",
		views : {
			'quotation-tab@tabs' : {
				templateUrl : "templates/quotation/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.quotationStep2' : {
				templateUrl : "templates/quotation/step2.html",
				controller : 'QuotationTabCtrl'
			}
		}
	}).state('tabs.quotationStep3', {
		url : "/quotation/step3",
		views : {
			'quotation-tab@tabs' : {
				templateUrl : "templates/quotation/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.quotationStep3' : {
				templateUrl : "templates/quotation/step3.html",
				controller : 'QuotationTabCtrl'
			}
		}
	}).state('tabs.quotationStep4', {
		url : "/quotation/step4",
		views : {
			'quotation-tab@tabs' : {
				templateUrl : "templates/quotation/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.quotationStep4' : {
				templateUrl : "templates/quotation/step4.html",
				controller : 'QuotationTabCtrl'
			}
		}
	}).state('tabs.searchMain', {
		url : "/search/main",
		views : {
			'search-tab@tabs' : {
				templateUrl : "templates/search/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.searchMain' : {
				templateUrl : "templates/search/main.html",
				controller : 'QuotationTabCtrl'
			}
		}
	}).state('tabs.searchCustomer', {
		url : "/search/customer",
		views : {
			'search-tab@tabs' : {
				templateUrl : "templates/search/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.searchCustomer' : {
				templateUrl : "templates/search/customer.html",
				controller : 'SearchTabCtrl'
			}
		}
	}).state('tabs.searchProposal', {
		url : "/search/proposal",
		views : {
			'search-tab@tabs' : {
				templateUrl : "templates/search/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.searchProposal' : {
				templateUrl : "templates/search/proposal.html",
				controller : 'SearchTabCtrl'
			}
		}
	}).state('tabs.searchPolicy', {
		url : "/search/policy",
		views : {
			'search-tab@tabs' : {
				templateUrl : "templates/search/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.searchPolicy' : {
				templateUrl : "templates/search/policy.html",
				controller : 'SearchTabCtrl'
			}
		}
	}).state('tabs.searchAdviser', {
		url : "/search/adviser",
		views : {
			'search-tab@tabs' : {
				templateUrl : "templates/search/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.searchAdviser' : {
				templateUrl : "templates/search/adviser.html",
				controller : 'SearchTabCtrl'
			}
		}
	}).state('tabs.syncMain', {
		url : "/sync/main",
		views : {
			'sync-tab@tabs' : {
				templateUrl : "templates/sync/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.syncMain' : {
				templateUrl : "templates/sync/main.html",
				controller : 'SyncTabCtrl'
			}
		}
	}).state('tabs.syncProduct', {
		url : "/sync/product",
		views : {
			'sync-tab@tabs' : {
				templateUrl : "templates/sync/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.syncProduct' : {
				templateUrl : "templates/sync/product.html",
				controller : 'SyncTabCtrl'
			}
		}
	}).state('tabs.syncProspect', {
		url : "/sync/prospect",
		views : {
			'sync-tab@tabs' : {
				templateUrl : "templates/sync/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.syncProspect' : {
				templateUrl : "templates/sync/prospect.html",
				controller : 'SyncTabCtrl'
			}
		}
	}).state('tabs.syncQuotation', {
		url : "/sync/quotation",
		views : {
			'sync-tab@tabs' : {
				templateUrl : "templates/sync/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.syncQuotation' : {
				templateUrl : "templates/sync/quotation.html",
				controller : 'SyncTabCtrl'
			}
		}
	}).state('tabs.syncEsubmission', {
		url : "/sync/esubmission",
		views : {
			'sync-tab@tabs' : {
				templateUrl : "templates/sync/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.syncEsubmission' : {
				templateUrl : "templates/sync/esubmission.html",
				controller : 'SyncTabCtrl'
			}
		}
	}).state('tabs.settings', {
		url : "/settings",
		views : {
			'settings-tab@tabs' : {
				templateUrl : "templates/settings/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.settings' : {
				templateUrl : "templates/settings/main.html",
				controller : 'SettingsTabCtrl'
			}
		}
	}).state('tabs.about', {
		url : "/about",
		views : {
			'about-tab@tabs' : {
				templateUrl : "templates/about/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.about' : {
				templateUrl : "templates/about/main.html",
				controller : 'AboutTabCtrl'
			}
		}
	}).state('tabs.contact', {
		url : "/contact",
		views : {
			'contact-tab@tabs' : {
				templateUrl : "templates/contact/menu.html",
				controller : 'MenuCtrl'
			},
			'menuContent@tabs.contact' : {
				templateUrl : "templates/contact/main.html",
				controller : 'ContactTabCtrl'
			}
		}
	});

	$urlRouterProvider.otherwise("/tab/home/main");

}).run(function($rootScope, $ionicModal, $timeout) {
	// $ionicModal.fromTemplateUrl('templates/login/login.html', {
	// scope : $rootScope
	// }).then(function(modal) {
	// $rootScope.modal = modal;
	// });
	//
	// $timeout(function() {
	// $rootScope.modal.show();
	// }, 500);

	$rootScope.currentLoginUser = {
		id : 401,
		userName : "LIFE",
		agentCode : "401"
	};
});