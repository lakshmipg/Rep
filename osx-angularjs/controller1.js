var controller1=angular.module('PageCtrlOne',[]);
controller1.controller('controller1',function($scope){
    $scope.init=function(){
        $('#page1').osxWindow('init', {
                title: 'Page1',
                windowBackgroundColor:'#FFF',
                windowBackgroundOpacity: 1,
                width: 500,
                height: 300,                
                modal: false,
                showManner: 'fadeIn',
                maximizeAfterInit: true,
                confirmBeforeClose: false              
                });
    }
});