'use strict';

function Ctl_calc($scope) {
//���̊֐���calc.html���ǂݍ��܂ꂽ��1�񂾂����s�����B
//$scope�ɂ́Ang-controller�̃^�O�ň͂܂ꂽ�ϐ����S�Ċi�[����Ă���H
	$scope.answer=0;
	$scope.change = function(){
		$scope.answer=parseInt($scope.param1)+parseInt($scope.param2);
	};
}

