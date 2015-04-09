var controller2=angular.module('PageCtrlTwo',[]);
controller2.controller('controller2',function($scope){
     $('#page2').osxWindow('init', {
                title: 'Page2',
                windowBackgroundColor:'#FFF',
                windowBackgroundOpacity: 1,
                width: 500,
                height: 300,                
                modal: false,
                showManner: 'fadeIn',
                maximizeAfterInit: true,
                confirmBeforeClose: false              
                });
});