angular.module("myShop")
.controller("MainController", [
    "$scope",
    "$route",
    function ($scope, $route) {
        $scope.$route = $route;
        $scope.products = [];

        $scope.loadProducts = function () {
            var dataString = localStorage.getItem("products");

            if (dataString)
                $scope.products = JSON.parse(dataString);
        }

        $scope.saveProducts = function () {
            var jsonString = JSON.stringify($scope.products);
            localStorage.setItem("products", jsonString);
        }

        $scope.loadProducts();
    }
]);