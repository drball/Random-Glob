#pragma strict
import UnityEngine.UI;

private var mainTextField : Text;
private var bottomTextField : Text;

private var randomNum : int = 0;

function Start () {
	mainTextField = GameObject.Find("MainTextField").GetComponent.<Text>();
	bottomTextField = GameObject.Find("BottomText").GetComponent.<Text>();
	
	//--find out how long it was since last logged in 
	
	//var time = 55;
	
	//--generate short 
	NewRandomShort();
	
	//--for debug
	InvokeRepeating("NewRandomShort",2,2);
	
	var explainerText = "You last checked on Glob "+time+" ago. Check back after an hour to see what he's been up to"; 
	bottomTextField.text = explainerText.ToUpper();
}

function NewRandomShort () {

	//--choose a random number
	randomNum = Random.Range(0, 100);
	
	var shortArray = [
		"Glob has just been "+randomVerb()+" his "+randomNoun(),
		"Glob has just been sat here "+randomVerb()+" his "+randomNouns(),
		"Glob has been eating "+randomFood(),
		"Glob has been sipping "+randomDrinkMetric()+" of "+randomDrink()
	];
	
	var longArray = [
		"Glob has been "+randomEatingVerb()+" "+randomFood(),
		"Glob has been "+randomVerb()+" his "+randomNoun(),
		"Glob has visited "+randomNoun()
	];
	

	
	//--display the text
	mainTextField.text = shortArray[Random.Range(0,shortArray.length)].ToUpper();
	//mainTextField.text;
	
}

function randomNoun() {
	//--single noun, like a body part, or posession
	var theArray = ["jurd", "tak", "jud", "kuq", "hurq", "doog", "druq", "gomble", "grildensmuk", 
		"bobblekin", "fandoflep", "jusset", "tiddlypop", "jandlesmoop", "drut", "kludduk", "tark"];
	return theArray[Random.Range(0,theArray.length)];
}

function randomNouns() {
	//--plural noun, like "trousers"
	var nounArray = ["jurds", "taks", "juds", "doogles", "smeeples", "wongles", "grildensmuk", 
		"jups", "fleps", "jussets", "doodarps", "handleycroops"];
	return nounArray[Random.Range(0,nounArray.length)];
}

function randomVerb() {
	//-- will be suffixed with "his"
	var verbArray = ["flepping", "brushing", "clipping", "tidying", "fiddling with", "sniffing", 
		"globbing", "boofing", "playing with", "wiping", "stroking"];
	return verbArray[Random.Range(0,verbArray.length)];
}

function randomFood() {
	var foodArray = ["kak", "stewed "+randomNoun(), "poached "+randomCreature()+" eggs", 
		"roasted "+randomCreature()+" bits", "calcified nitro-cheese",  "isotonic mince logs", 
		"tokk", "a "+randomNoun()+" sandwich", "a "+randomNoun()+" baguette",
		"dried fish gems", "microwavable giraffe hexagons", "vegan bacon-powder", 
		"'germinated snake puffs'", "peach-flavoured beetle solution", "chlorinated "+randomNoun()+" curry", 
		"cyber-mince"];
	return foodArray[Random.Range(0,foodArray.length)];
}

function randomCreature() {
	var theArray = ["Ebulian", "Shublub", "Mollopod", "vermin", "worm", "Hymenoptera", "drongo"];
	return theArray[Random.Range(0,theArray.length)];
}

function randomPlace() {
	var theArray = ["Ebulia", "Solaria", "Lower Solburn", "the "+randomNoun()+" cluster", 
		"Jasset ridge"];
	return theArray[Random.Range(0,theArray.length)];
}

function randomEatingVerb() {
	var theArray = ["snacking on", "munching", "devouring", "chomping on", "chewing", "digesting"];
	return theArray[Random.Range(0,theArray.length)];
}

function randomDrinkMetric() {

	var theArray = ["a pint", "half a pint", "a cosset", "a metric cubit", "half a gallon", 
		"a shot", "a can"];

	return theArray[Random.Range(0,theArray.length)];
	
}

function randomDrink() {

	var theArray = [randomEmpire()+" ale", randomNoun()+" juice", randomEmpire()+" juice", 
		randomEmpire()+" cola", randomEmpire()+" tea"];

	return theArray[Random.Range(0,theArray.length)];
	
}

function randomEmpire() {

	var theArray = ["Kangaphin", "Plebian", "Human"];

	return theArray[Random.Range(0,theArray.length)];
	
}



