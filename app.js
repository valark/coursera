(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
$scope.name="Tony Johnson";
$scope.think1=function () {
return  "Say hello Couresra !!!!!!!!!!!!!";
}
});

})();
