var cab = angular.module("cowsandbulls", []);
cab.controller("cabController", ['$scope', function ($scope) {

    $scope.x;
    $scope.y;
    $scope.z;

    $scope.getNum = function () {
        $scope.x = Math.floor((Math.random() * 10));
        if ($scope.x == 0) {
            do {
                $scope.x = Math.floor((Math.random() * 10));
            }
            while ($scope.x == 0);
        }
        $scope.y = Math.floor((Math.random() * 10));
        if ($scope.y == $scope.x) {
            do {
                $scope.y = Math.floor((Math.random() * 10));
            }
            while ($scope.y == $scope.x);
        }
        $scope.z = Math.floor((Math.random() * 10));
        if (($scope.z == $scope.x) || ($scope.z == $scope.y)) {
            do {
                $scope.z = Math.floor((Math.random() * 10));
            }
            while (($scope.z == $scope.x) || ($scope.z == $scope.y));
        }
        var number = ($scope.x * 100) + ($scope.y * 10) + $scope.z;
                alert(number);
        $scope.showyes = true;
    }
    $scope.userNumArray = [];

    $scope.numtoarray = function () {
        $scope.l = Math.floor($scope.guessNumber / 100);
        $scope.m = Math.floor(($scope.guessNumber % 100) / 10);
        $scope.n = $scope.guessNumber % 10;
        if (($scope.guessNumber.length == 3) && (($scope.l == $scope.m) || ($scope.n == $scope.m) || ($scope.l == $scope.n))) {
            $scope.repeatedyes = true;
            return;
        } else {
            $scope.repeatedyes = false;
        }

        $scope.result;
        $scope.result1;
        $scope.result2;
        $scope.result3;
        $scope.resultn1;
        $scope.resultn2;
        $scope.resultn3;
        if ($scope.l == $scope.x) {
            $scope.result1 = "1B";
        } else if ($scope.l == $scope.y) {
            $scope.result1 = "1C";
        } else if ($scope.l == $scope.z) {
            $scope.result1 = "1C";
        } else {
            $scope.result1 = "No Match";
        }

        if ($scope.m == $scope.x) {
            $scope.result2 = "1C";
        } else if ($scope.m == $scope.y) {
            $scope.result2 = "1B";
        } else if ($scope.m == $scope.z) {
            $scope.result2 = "1C";
        } else {
            $scope.result2 = "No Match";
        }

        if ($scope.n == $scope.x) {
            $scope.result3 = "1C";
        } else if ($scope.n == $scope.y) {
            $scope.result3 = "1C";
        } else if ($scope.n == $scope.z) {
            $scope.result3 = "1B";
        } else {
            $scope.result3 = "No Match";
        }
        if (($scope.result1 == "No Match") && ($scope.result2 == "No Match") && ($scope.result3 == "No Match")) {
            $scope.result = "No Match"
            $scope.userNumArray.push({
                guessnum: $scope.guessNumber,
                res: $scope.result
            });
        } else if (($scope.result1 != "No Match") && ($scope.result2 != "No Match") && ($scope.result3 != "No Match")) {
            $scope.resultbef = $scope.result1 + $scope.result2 + $scope.result3;
            if ($scope.resultbef == "1B1B1B") {
                $scope.result = "3B";
                $("#winModal").modal();
            } else if ($scope.resultbef == "1C1C1C") {
                $scope.result = "3C";
            } else if (($scope.resultbef == "1C1C1B") || ($scope.resultbef == "1C1B1C") || ($scope.resultbef == "1B1C1C")) {
                $scope.result = "1B 2C";
            }
            $scope.userNumArray.push({
                guessnum: $scope.guessNumber,
                res: $scope.result
            });
        } else if (($scope.result1 == "No Match") || ($scope.result2 == "No Match") || ($scope.result3 == "No Match")) {
            $scope.resultbef = $scope.result1 + $scope.result2 + $scope.result3;
            $scope.resultdup = $scope.resultbef.replace(/No Match/g, "");
            if ($scope.resultdup == "1B1B") {
                $scope.result = "2B";
            } else if ($scope.resultdup == "1C1C") {
                $scope.result = "2C";
            } else if ($scope.resultdup == "1C") {
                $scope.result = "1C";
            } else if ($scope.resultdup == "1B") {
                $scope.result = "1B";
            } else {
                $scope.result = "1B 1C";
            }
            $scope.userNumArray.push({
                guessnum: $scope.guessNumber,
                res: $scope.result
            });
        }

        $scope.guessNumber = "";
    }
}]);
