/**
 * Created by Carmen-Uni on 22/03/2017.
 */
angular.module('multichatApp')
    .controller('messagesPictureOpenModalCtrl', function($scope, $uibModalInstance, data) {
        $scope.data = data;
    });