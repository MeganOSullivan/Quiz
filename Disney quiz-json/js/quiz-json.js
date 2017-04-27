var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct=0, name = 0; 
var quizAnswers=[];


var questions=[
{
	question:"What is the name of the Reggae singing Caribbean crab in the Little Mermaid?",
	correctAnswer: "",
	
	answer0:"Sebastian",
	answer1: "Scuttle",
	answer2: "Max",
	answer3: "Benjamin"
},
{	question:"In which Disney film will you hear the song 'Everybody Wants To Be A Cat??",
	correctAnswer:"The Aristocats",

	
	answer0: "The Aristocats",
	answer1: "Lady and the Tramp",
	answer2: "Oliver & Company",
	answer3: "Alice in Wonderland"
},
{
	question: "Who teaches Mowgli the bare necessities of life?",
	correctAnswer: "Baloo",
	
	
	answer0: "Baloo",
	answer1: "Bagheera",
	answer2: "Kaa",
	answer3: "Raksha"
	
},
{
	question: "What is the name of the racing car voiced by Owen Wilson in the film, Cars",
	correctAnswer: "Lightning McQueen", 
	
	answer0: "Lightning McQueen",
	answer1: "Mater",
	answer2: "Chick Hicks",
	answer3: "Snotrod"
	
},
{
	question: "What does Woody from Toy Story have in his boot?", 
	correctAnswer: "A snake",
	
	
	answer0: "A snake",
	answer1: "A Cactus",
	answer2: "Andy",
	answer3: "Horse"
},
{
	
	question: "In which Disney film will you find the villain, Cruella De Vil?", 
	correctAnswer: "101 Dalmatians",
	
	
	answer0: "101 Dalmatians",
	answer1: "The Fox and the Hound",
	answer2: "Snow White",
	answer3: "Rapunzel"
},
{
	
	question: "Which Disney character sings the song 'Be Prepared?", 
	correctAnswer: "Scar, Lion king",
	
	
	answer0: "Scar, Lion king",
	answer1: "Bagheera, The Jungle Book",
	answer2: "Gus, Cinderella",
	answer3: "Sleepy, Snow White"
},
{
	
	question: "Which film does Eddie Murphy do the voice-over for a red Chinese dragon?", 
	correctAnswer: "Mulan",
	
	
	answer0: "Mulan",
	answer1: "The Reluctant Dragon",
	answer2: "Tresure Island",
	answer3: "The Tiger walks"
},
{
	
	question: "Which 1991 Disney film has a female lead called Belle?", 
	correctAnswer: "Beauty and the Beast",
	
	
	answer0: "Beauty and the Beast",
	answer1: "Robin Hood",
	answer2: "Aladdin",
	answer3: "Pocahontas"
},
{
	
	question: "The villain, The Queen of Hearts, appears in which 1951 Disney film?", 
	correctAnswer: "Alice in Wonderland",
	
	
	answer0: "Alice in Wonderland",
	answer1: "Hercules",
	answer2: "Tarzan",
	answer3: "Bolt"
},
{
	
	question: "What American actor played the part of Burt in Mary Poppins?", 
	correctAnswer: "Dick Van Dyke",
	
	
	answer0: "Dick Van Dyke",
	answer1: "Matthew Garber",
	answer2: "David Tomlinson",
	answer3: "Ed Wynn"
},
{
	
	question: "Which Disney film is set on a Hawaiian Island?", 
	correctAnswer: "Lilo and Stitch",
	
	
	answer0: " Lilo and Stitch",
	answer1: "The Little Mermaid",
	answer2: "Tresure Island",
	answer3: "Moana"
},
{
		
	question: "Name the sidekick of Disney character, Pongo?", 
	correctAnswer: "Perdita",
	
	
	answer0: " Perdita",
	answer1: "Pepper",
	answer2: "Penny",
	answer3: "Patch"
},
{
		
	question: "What animals portray surfer dudes in Finding Nemo?", 
	correctAnswer: "Turtles",
	
	answer0: "Turtles",
	answer1: "Whales",
	answer2: "Sharks",
	answer3: "Sea Gulls"
},
{
		
	question: "Who, in the film Marry Poppins, sings the song 'Step in Time?", 
	correctAnswer: "Bert & Co",
	
	answer0: "Bert & Co",
	answer1: "Mary Poppins",
	answer2: "George Banks",
	answer3: "Winifred Banks"
},
{
	
		
	question: "'What are Scully and Mike collecting to power Monstropolis in Monsters, Inc.?", //question
	correctAnswer: "Children's screams",
	
	
	answer0: "Children's screams",
	answer1: "Children's laughs",
	answer2: "Children's tears",
	answer3: "Children's toys"
},
{
	
	question: "'Two Worlds' is a song from which Disney film?",
	correctAnswer: "Tarzan",
	
	
	answer0: "Tarzan",
	answer1: "Mulan",
	answer2: "Aladdin",
	answer3: "Hercules"
},
{	
	question: "Which Disney classic has a talking mirror which is asked mirror mirror on the wall?", 
	correctAnswer:" Snow White",
	
	
	answer0: "Snow White",
	answer1: "Priness Diarys",
	answer2: "Beauty and the Beast",
	answer3: "Cindrella"
},
{
question: "The villain, Madame Mim, appears in which 1963 Disney film?",
	correctAnswer: "The Sword in the Stone",
	
	
	answer0: "The Sword in the Stone",
	answer1: "The Sword and the Rose",
	answer2: "The Sword and the Waterfall",
	answer3: "The Stone and the Slipper"
},
{
question: "What does Dumbo hold in his trunk to help him fly?", 
	correctAnswer: "A feather",
	
	
	answer0: "A feather",
	answer1: "His yellow hat",
	answer2: "A Balloon",
	answer3: "A Stone"
}



];
function getScore(){
var score=0;
var numQuestions=20;

for (var i=0;i<numQuestions;i++){
if (userInput[i]==answers[i]){
score += 1;
}
else{
score += 0;
}

}
return score;
}
function returnScore(){
alert("Your score is "+getScore()+"/20");
}
function _(x)
{ 
    return document.getElementById(x);
} 

		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;
}


function renderQuestion()
{
	test=_("test");
	if(pos>=questions.length)
	{
		test.innerHTML="<h2>You Got "+correct+" of "+questions.length+"questions correct(" +percent() + "%)</h2><button onclick='window.print()'>Print this page</button>";
		_("test_status").innerHTML+=" Thank you for completing the quiz";
		pos=0;
		correct=0;
		return false;
	}
	var bar=document.getElementById("progressBar");
	_("test_status").innerHTML= "Question" + (pos+1)+ " of " +questions.length;
	
	bar.value=(pos+1)
	

	
quizAnswers[0]=questions[pos].answer0;
quizAnswers[1]=questions[pos].answer1;
quizAnswers[2]=questions[pos].answer2;
quizAnswers[3]=questions[pos].answer3;

console.log("Unshuffled answers" + quizAnswers);

var shuffledAnswers=shuffleArray(quizAnswers);
console.log("shuffled answers"+shuffledAnswers);


	question=questions[pos].question;
	choiceA=shuffledAnswers[0];
	choiceB=shuffledAnswers[1];
	choiceC=shuffledAnswers[2];
	choiceD=shuffledAnswers[3];
	test.innerHTML="<h3>"+question+"</h3>";
	test.innerHTML +="<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; 
	test.innerHTML +="<input type='radio' name='choices' value='"+choiceB+"' checked> "+choiceB+"<br>"; 
	test.innerHTML +="<input type='radio' name='choices' value='"+choiceC+"' checked> "+choiceC+"<br>"; 
	test.innerHTML +="<input type='radio' name='choices' value='"+choiceD+"' checked> "+choiceD+"<br><br>"; 
	test.innerHTML +="<button onclick='checkAnswer()'>Submit Answer</button>";
}


function checkAnswer()
{
		choices=document.getElementsByName("choices");
		for(var i=0; i<choices.length; i++)
		{
		if(choices[i].checked)
		{
		choice=choices[i].value;
		}
	}
if(choice==questions[pos].correctAnswer)
{
	alert('Woohoo! Correct!');
	correct++;
}
else
{
	alert('Sorry that was the wrong answer. The correct answer is' + questions[pos].correctAnswer);
}
pos++;
renderQuestion();
}


function shuffleArray(array){
	for(var i=array.length-1; i>0;i--)
	{
		var j=Math.floor(Math.random()*(i+1));
		var temp=array[i];
		array[i]=array[j];
		array[j]=temp;
	}
	return array;
}





	
window.addEventListener("load", renderQuestion, false);