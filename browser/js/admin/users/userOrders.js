app.config(function($stateProvider){
    $stateProvider.state('userOrders', {
        url: '/admin/users/orders/:id',
        templateUrl: 'js/admin/users/userOrders.html',
        controller: 'AdminUserOrdersCtrl',
        resolve: {
            userOrders : function(OrderFactory, $stateParams){
                return OrderFactory.getUserOrders($stateParams.id);
            }
        }
    });
});

app.controller('AdminUserOrdersCtrl', function($scope, userOrders, OrderFactory){
    $scope.userOrders = userOrders;
    $scope.deleteOrder = function(order){
        OrderFactory.deleteOrder(order.id)
        .then(function(success){
            console.log('Order Deleted!');
            console.log($scope.userOrders);
            $scope.userOrders.splice($scope.userOrders.indexOf(order),1);
        });
    };
});