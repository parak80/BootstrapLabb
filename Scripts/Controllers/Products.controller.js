angular.module("myShop")
.controller("ProductsController", [
    "$scope",
    function ($scope) {
        $scope.title = "Products";
        $scope.newProduct = {};

        $scope.addProduct = function () {
            $scope.newProduct.id = Date.now();
            $scope.products.push($scope.newProduct);
            $scope.newProduct = {};
            $scope.saveProducts();
        }
        $scope.remove = function (index) {
            $scope.products.splice(index, 1);
        }
    }
]);