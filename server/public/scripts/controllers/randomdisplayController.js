myApp.controller('randomdisplayController', ['$scope', '$http', function($scope, $http) {
    console.log('random display controller running');

// $scope.numbersA = [random(10,99),random(10,99),random(10,99),random(10,99),random(10,99),random(10,99)];
// $scope.numbersB = [random(10,99),random(10,99),random(10,99),random(10,99),random(10,99),random(10,99)];
// $scope.numbersC = [random(10,99),random(10,99),random(10,99),random(10,99),random(10,99),random(10,99)];
// $scope.numbersD = [random(10,99),random(10,99),random(10,99),random(10,99),random(10,99),random(10,99)];
// $scope.numbersE = [random(10,99),random(10,99),random(10,99),random(10,99),random(10,99),random(10,99)];
// $scope.numbersF = [random(10,99),random(10,99),random(10,99),random(10,99),random(10,99),random(10,99)];
// $scope.numbersG = [random(10,99),random(10,99),random(10,99),random(10,99),random(10,99),random(10,99)];
// $scope.numbersH = [random(10,99),random(10,99),random(10,99),random(10,99),random(10,99),random(10,99)];
// $scope.numbersI = [random(10,99),random(10,99),random(10,99),random(10,99),random(10,99),random(10,99)];
// $scope.numbersJ = [random(10,99),random(10,99),random(10,99),random(10,99),random(10,99),random(10,99)];
$scope.counter = 0

$scope.one = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.two = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.three = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
}

$scope.four = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
}

$scope.five = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.six = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.seven = {
  top:random(10,99),
  bottom:random(10,99),
  answers:null
};

$scope.eight = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.nine = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.ten = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.eleven = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.twelve = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.thirteen = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.fourteen = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.fifteen = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.sixteen = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.seventeen = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.eightteen = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.nineteen = {
  top:random(10,99),
  bottom:random(10,99),
  answers:null
};

$scope.twenty = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.twentyone = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.twentytwo = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.twentythree = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.twentyfour = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.twentyfive= {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.twentysix = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.twentyseven = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.twentyeight = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.twentynine = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};

$scope.thirty = {
  top:random(10,99),
  bottom:random(10,99),
  answer:null
};


function random(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

$scope.correct = function() {
  one();
  two();
  three();
  four();
  five();
  six();
   seven();
  eight();
  nine();
  ten();
  eleven();
  twelve();
  thirteen();
  fourteen();
  fifteen();
  sixteen();
  seventeen();
  eightteen();
  nineteen();
  twenty();
  twentyone();
  twentytwo();
  twentythree();
  twentyfour();
  twentyfive();
  twentysix();
  twentyfive();
  twentysix();
  twentyseven();
  twentyeight();
  twentynine();
  thirty();
  alert("you got " + $scope.counter + " correct");
};



function one() {
var x = $scope.one.top + $scope.one.bottom;
var y = Number($scope.one.answer);
  if(x === y){
    $scope.counter++;
  }
}
function two() {
var x = $scope.two.top + $scope.two.bottom;
var y = Number($scope.two.answer);
  if(x === y){
    $scope.counter++;
  }
}
function three() {
var x = $scope.three.top + $scope.three.bottom;
var y = Number($scope.three.answer);
  if(x === y){
    $scope.counter++;
  }
}
function four() {
var x = $scope.four.top + $scope.four.bottom;
var y = Number($scope.four.answer);
  if(x === y){
    $scope.counter++;
  }
}
function five() {
var x = $scope.five.top + $scope.five.bottom;
var y = Number($scope.five.answer);
  if(x === y){
    $scope.counter++;
  }
}
function six() {
var x = $scope.six.top + $scope.six.bottom;
var y = Number($scope.six.answer);
  if(x === y){
    $scope.counter++;
  }
}
function seven () {
var x =($scope.seven.top) + ($scope.seven.bottom);
var y = Number($scope.seven.answer);
  if(x === y){
    $scope.counter++;
  }
};
function eight() {
var x = $scope.eight.top + $scope.eight.bottom;
var y = Number($scope.eight.answer);
  if(x === y){
    $scope.counter++;
  }
}
function nine() {
var x = $scope.nine.top + $scope.nine.bottom;
var y = Number($scope.nine.answer);
  if(x === y){
    $scope.counter++;
  }
}
function ten() {
var x = $scope.ten.top + $scope.ten.bottom;
var y = Number($scope.ten.answer);
  if(x === y){
    $scope.counter++;
  }
}
function eleven() {
var x = $scope.eleven.top + $scope.eleven.bottom;
var y = Number($scope.eleven.answer);
  if(x === y){
    $scope.counter++;
  }
}
function twelve() {
var x = $scope.twelve.top + $scope.twelve.bottom;
var y = Number($scope.twelve.answer);
  if(x === y){
    $scope.counter++;
  }
}
function thirteen() {
var x = $scope.thirteen.top + $scope.thirteen.bottom;
var y = Number($scope.thirteen.answer);
  if(x === y){
    $scope.counter++;
  }
}
function fourteen() {
var x = $scope.fourteen.top + $scope.fourteen.bottom;
var y = Number($scope.fourteen.answer);
  if(x === y){
    $scope.counter++;
  }
}
function fifteen() {
var x = $scope.fifteen.top + $scope.fifteen.bottom;
var y = Number($scope.fifteen.answer);
  if(x === y){
    $scope.counter++;
  }
}
function sixteen() {
var x = $scope.sixteen.top + $scope.sixteen.bottom;
var y = Number($scope.sixteen.answer);
  if(x === y){
    $scope.counter++;
  }
}
function seventeen() {
var x = $scope.seventeen.top + $scope.seventeen.bottom;
var y = Number($scope.seventeen.answer);
  if(x === y){
    $scope.counter++;
  }
}
function eightteen() {
var x = $scope.eightteen.top + $scope.eightteen.bottom;
var y = Number($scope.eightteen.answer);
  if(x === y){
    $scope.counter++;
  }
}
function nineteen() {
var x = $scope.nineteen.top + $scope.nineteen.bottom;
var y = Number($scope.nineteen.answer);
  if(x === y){
    $scope.counter++;
  }
}
function twenty() {
var x = $scope.twenty.top + $scope.twenty.bottom;
var y = Number($scope.twenty.answer);
  if(x === y){
    $scope.counter++;
  }
}
function twentyone() {
var x = $scope.twentyone.top + $scope.twentyone.bottom;
var y = Number($scope.twentyone.answer);
  if(x === y){
    $scope.counter++;
  }
}
function twentytwo() {
var x = $scope.twentytwo.top + $scope.twentytwo.bottom;
var y = Number($scope.twentytwo.answer);
  if(x === y){
    $scope.counter++;
  }
}
function twentythree() {
var x = $scope.twentythree.top + $scope.twentythree.bottom;
var y = Number($scope.twentythree.answer);
  if(x === y){
    $scope.counter++;
  }
}
function twentyfour() {
var x = $scope.twentyfour.top + $scope.twentyfour.bottom;
var y = Number($scope.twentyfour.answer);
  if(x === y){
    $scope.counter++;
  }
}
function twentyfive() {
var x = $scope.twentyfive.top + $scope.twentyfive.bottom;
var y = Number($scope.twentyfive.answer);
  if(x === y){
    $scope.counter++;
  }
}
function twentysix() {
var x = $scope.twentysix.top + $scope.twentysix.bottom;
var y = Number($scope.twentysix.answer);
  if(x === y){
    $scope.counter++;
  }
}
function twentyseven() {
var x = $scope.twentyseven.top + $scope.twentyseven.bottom;
var y = Number($scope.twentyseven.answer);
  if(x === y){
    $scope.counter++;
  }
}
function twentyeight() {
var x = $scope.twentyeight.top + $scope.twentyeight.bottom;
var y = Number($scope.twentyeight.answer);
  if(x === y){
    $scope.counter++;
  }
}
function twentynine() {
var x = $scope.twentynine.top + $scope.twentynine.bottom;
var y = Number($scope.twentynine.answer);
  if(x === y){
    $scope.counter++;
  }
}
function thirty() {
var x = $scope.thirty.top + $scope.thirty.bottom;
var y = Number($scope.thirty.answer);
  if(x === y){
    $scope.counter++;
  }
}



}]);
