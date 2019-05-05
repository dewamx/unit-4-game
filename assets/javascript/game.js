var yourWins= 0;
 	var yourLosses= 0;
 	var addition=0;
 	var total= Math.floor((Math.random() * 100) + 19);
 	
 	var red = Math.floor((Math.random() * 12) + 1);
 	var white = Math.floor((Math.random() * 12) + 1);
 	var green = Math.floor((Math.random() * 12) + 1);
 	var blue = Math.floor((Math.random() * 12) + 1);



 	var updateAddition = function () {
 		$('.random').empty();
 		$('.random').append(addition);

 		$('#number').empty();
 		$('#number').append(yourWins);

 		$('#numbers').empty();
 		$('#numbers').append(yourLosses);
 	}

 		var restart = function (){
 			addition = 0;
 			total = Math.floor((Math.random() * 100) + 19);

 			$('#totals').empty();
 			$('#totals').append(total);

 			var red = Math.floor((Math.random() * 12) + 1);
 			var white = Math.floor((Math.random() * 12) + 1);
 			var green = Math.floor((Math.random() * 12) + 1);
 			var blue = Math.floor((Math.random() * 12) + 1);
 			updateAddition();
 		}	


 	var game = function (){
 		if (addition == total) {
 			yourWins = yourWins + 1;
 			alert("You win!");
 			restart();
 		} else if (addition > total) {
 			yourLosses = yourLosses + 1;
 			alert("You lost");
 			restart();
 		} else {
 			updateAddition();
 		}
 	}

 	$('.totals').append(total);
 	$('.random').append(addition);

 	$( document ).ready(function() {
 		$('.crystal1').click(function(){
 			addition = addition + red;
 			game();
 		})

 		$('.crystal2').click(function(){
 			addition = addition + white;
 			game();
 		})

 		$('.crystal3').click(function(){
 			addition = addition + green;
 			game();
 		})

 		$('.crystal4').click(function(){
 			addition = addition + blue;
 			game();
 		})
 	});
