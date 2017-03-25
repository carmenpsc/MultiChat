/**
 * Created by Carmen-Uni on 21/03/2017.
 */
angular.module('multichatApp')
    .controller('videoModalCtrl', function($scope, $uibModalInstance, data) {
        $scope.data = data;
        $scope.close = function(result) {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.accept = function(result) {
            result = $scope.url;
            $uibModalInstance.close(result);
        };
    });
