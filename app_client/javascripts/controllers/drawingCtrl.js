/**
 * Created by Carmen-Uni on 21/03/2017.
 */
angular.module('multichatApp')
    .controller('drawingCtrl', function($scope, webSocketManager) {
        $scope.addCircle = function(){
            webSocketManager.drawingManagement.addCircle();
        };
        $scope.addRectangle = function(){
            webSocketManager.drawingManagement.addRectangle();
        };
        $scope.addTriangle = function(){
            webSocketManager.drawingManagement.addTriangle();
        };
        $scope.addEllipse = function(){
            webSocketManager.drawingManagement.addEllipse();
        };
        $scope.getPencil = function(){
            webSocketManager.drawingManagement.getPencil();
        };
        $scope.getSelection = function(){
            webSocketManager.drawingManagement.getSelection();
        };
        $scope.clearAll = function(){
            webSocketManager.drawingManagement.clearAll();
        };
    });