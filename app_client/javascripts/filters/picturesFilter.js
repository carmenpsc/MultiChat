/**
 * Created by Carmen-Uni on 22/03/2017.
 */
angular.module('multichatApp')
    .filter("pictures", function($sce) {
        return function(input) {
            var output = '<img src="' + input.binary + '" width="50px" height="50px">';
            output += '<p>' + input.name + '</p>';
            return $sce.trustAsHtml(output);
        };
    });
