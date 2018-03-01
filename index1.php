<!doctype html>
<html lang="en-US">

<head>
    <title>Webpage Title</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <?php include 'assets/_partial/head.php' ?>
        <!--        <link href="style.css" rel="stylesheet">-->
</head>

<body ng-app="cowsandbulls">
    <div class="clearfix"></div>
    <section ng-controller="cabController" id="section-home1" class="container-fluid text-center p-tb-md bg-f1f" style="height:100vh">

        <button class="btn btn-primary" ng-click="getNum()" ng-hide="showyes">Get 3 digit Number</button>
        <button class="btn btn-success ng-hide" ng-show="showyes">Number Generated</button>

        <form name="formguessnum" class="m-t-lg">
            <label>Enter your 3 digit number</label>
            <input type="text" name="guessnumber" ng-model="guessNumber">
            <button type="submit" ng-click="numtoarray()">Enter</button>
            <p class="m-tb-sm" style="color:red" ng-if="repeatedyes">Enter Non-Repeated 3 digit Number only</p>
        </form>

        <table class="table table-bordered" style="width:50%;margin:30px auto">
            <tr style="background:#d6d6d6">
                <th>Guess#</th>
                <th>Your Number</th>
                <th>Result</th>
            </tr>
            <tr ng-repeat="usernum in userNumArray">
                <td>{{$index + 1}}</td>
                <td>{{usernum.guessnum}}</td>
                <td>{{usernum.res}}</td>
            </tr>
        </table>
        
        <div class="modal fade" id="winModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Congratulations!!</h4>
                    </div>
                    <div class="modal-body">
                        <h3>Correct Guess!</h3>
                        <p>You have guessed the Number in {{userNumArray.length}} attemps</p>
                    </div>
                    <div class="modal-footer">
                        <a href="index.html">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success" data-dismiss="modal">Play Again</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <div class="clearfix"></div>

    <?php include 'assets/_partial/footer-scripts.php' ?>
        <script src="main.js" type="text/javascript"></script>

</body>

</html>