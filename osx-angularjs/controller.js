//The stack controller module
var crtl = angular.module('pageCtrl', [ ]);
// The actual controller
crtl.controller('crtl',function($scope, $location, $rootScope) {
 $scope.init = function() {
                

    document.getElementById('dockMenu').style.display = 'block';
    var bodyHeightOld = null;
    var bodyWidthOld = null;

    function openWindowWhenDbclick($target, content, taskText) {
        var logger = jQuery.osxUtils.logger;

        // reopen Maximized window
        var $winOpened = $('#' + $target.attr('win_id'));
        if ($winOpened.size() == 1) {
                        logger.info('reopen Maximized window, winId='
                                                        + $target.attr('win_id'));

                        var display = $winOpened.css('display');
                        $winOpened.osxWindow('open');
                        return;
        }

        logger.info('create new window...');
        var osxWindowId = 'osx-window_' + new Date().getTime();
        var winConfig = {
                        id : osxWindowId,
                        title : 'Window-' + content,
                        width : $(document.body).width() * 0.5,
                        height : $(document.body).height() * 0.4,
                        afterOpen : function($win) {
                                                               
                        var isCreated = false;
                        $('#toolBar .task span').each(function() {
                            if ($(this).attr(
                                                            'win_id') == $win
                                                            .attr('id')) {
                                            isCreated = true;
                                            return false;
                            }
                        });
                        if (isCreated) {
                                        logger.info('task li already created, so return......');
                                        return;
                        }

                                                                // add taskLi to taskUL
                         var $taskLi = $('<span/>').text(taskText).attr({win_id : osxWindowId, cell_id : $target.attr('id')}).click(
                            function() {
                                var $win = $('#'+ $(this).attr('win_id'));
                                $.fn.osxWindow.toggle($win);}).appendTo($('#toolBar .task'));
                                return true;
                            },
                            afterMinimize : function($win) {

                            },
                            beforeClose : function($win) {
                                logger.info('window closed, winId=' + $win.attr('id'));
                                var cellId = $win.attr('cell_id');
                                $('#' + cellId).removeAttr('win_id').fadeTo('fast', 1);

                                // delete taskLi from taskUl
                                $('#toolBar .task span').each( function() {
                                        if ($(this).attr('win_id') == $win.attr('id')) {
                                             $(this).remove();
                                        }
                                });
                                return true;
                            }
                        };                               
                        $target.attr({win_id : osxWindowId}).fadeTo('fast', 0.6);
                        var $win = $('<div/>').text($target.attr('id')).osxWindow('init', winConfig);
                        $win.attr({cell_id : $target.attr('id')});
                }

                function resizeDesktop() {
                    var bodyHeight = $(document.body).height();
                    var toolBarDivHeight = 21;
                    $('#toolBar').css({
                                    height : toolBarDivHeight,
                                    'line-height' : toolBarDivHeight + 'px'
                    });
                    $('#gridDivOuter').css({
                                    height : bodyHeight - toolBarDivHeight                    
                    });
                }

                function reInit(cellContentAry) {
                    var logger = jQuery.osxUtils.logger;

                    var bodyHeight = $('body').height();
                    var bodyWidth = $('body').width();
                    if (bodyHeightOld && bodyHeightOld == bodyHeight
                                                    && bodyWidthOld
                                                    && bodyWidthOld == bodyWidth) {
                                    return;
                    }
                    bodyHeightOld = bodyHeight;
                    bodyWidthOld = bodyWidth;

                    resizeDesktop();

                }
                var windowResize = false;
                $(window).resize(function() {
                                windowResize = true;
                });
                var windowResizeInterval = setInterval(function() {
                                if (!windowResize) {
                                                return;
                                }
                                var logger = jQuery.osxUtils.logger;
                                logger.info('window resize...');
                                reInit();

                                windowResize = false;
                }, 1500);

               
                
                
             $('.osx-dock td.mid').each(function(){
                var $td = $(this);
                $(this).find('img').not('#Demo').click(function(){
                        var winId = $(this).attr('_win_id') + '';
                        var $win = $('#' + winId);
        
                        //open or minimize window
                        if($win.size() == 1){
                            $.fn.osxWindow.toggle($win);
                            return;
                        }
        
                        $(this).fadeTo('fast', 0.6);
        
                        //create new window
                        var winIdNew = 'osxWindow_' + new Date().getTime();
                        if (item.context.id == 'page1') {
                            location.path('/page1') ;
                            $scope.apply() ;
                        }
                        else if(item.context.id == 'page2'){
                                location.path("/page2") ;
                            $scope.apply() ;
                            
                            
                        }else{
                            $(this).attr({
                                _win_id: winIdNew
                            });
                            var $win = $('<div/>').text($(this).attr('id')).osxWindow('init', {
                                id: winIdNew,
                                title: 'Osx-Window ' + $(this).attr('id'),
                                width: 500,
                                height: 300,
                                modal: false,
                                beforeClose: function($win){
                                    $('#' + $win.attr('_dock_element_id')).fadeTo('fast', 1);
                                }
                            });
                            $win.attr({
                                _dock_element_id: $(this).attr('id')
                            });
                        }
                });
            });    
       }

       
       
       $scope.page1Func=function(){
         $location.path('/page1') ;
                            $scope.apply() ;
       }
       $scope.page2Func=function(){
         $location.path('/page2') ;
                            $scope.apply() ;
       }
})
