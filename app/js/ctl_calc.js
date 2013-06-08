'use strict';

function Ctl_calc($scope) {
//この関数はcalc.htmlが読み込まれた時1回だけ実行される。
//$scopeには、ng-controllerのタグで囲まれた変数が全て格納されている？
	$scope.answer=0;
	$scope.change = function(){
		$scope.answer=parseInt($scope.param1)+parseInt($scope.param2);
	};
}

