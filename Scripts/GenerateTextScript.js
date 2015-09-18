#pragma strict
import UnityEngine.UI; //--need this for canvas stuff
//import System.Collections.Generic;

private var mainTextField : Text;
private var bottomTextField : Text;
private var timeScript : timeScript;

function Start () {
	mainTextField = GameObject.Find("MainTextField").GetComponent.<Text>();
	bottomTextField = GameObject.Find("BottomText").GetComponent.<Text>();
	
	timeScript = GetComponent.<timeScript>();
	
	//--find out how long it was since last logged in 
	var timeHours = timeScript.lastLoginTimeHours(); //--for calculations
	var timeMins = timeScript.lastLoginTimeMins(); //--for calculations
	var timeFormatted = timeScript.lastLoginTimeFormatted(); //--for outputting
	
	var explainerText : String;
	
	Debug.Log("minutesd = "+timeHours);
	
	//--if over an hour, do something different
	if(timeHours > 1) {
		//--generate long 
		NewRandomLong();
				
		//--for debug
		//InvokeRepeating("NewRandomLong",4,4);
		
		explainerText = "This is what Glob has been up to since you last checked. Check back after an hour to see what he'll do next"; 
	

	} else {
	
		if(timeMins < 3) {
		
			mainTextField.text = "Glob hasn't had chance to do anything yet, check back in at least 5 minutes".ToUpper();
			explainerText = "But he's planning on "+randomVerb()+" his "+randomNoun();
		
		} else {
			//--generate short 
			NewRandomShort();
			
			//--for debug
			//InvokeRepeating("NewRandomShort",2,2);
			
			explainerText = "You only checked on Glob "+timeFormatted+" ago. Check back after an hour to see what he's been up to"; 
		
		}
		
	}
	
	bottomTextField.text = explainerText.ToUpper();
}

function NewRandomShort () {

	//--choose a random number
	var randomNum : int = Random.Range(0, 100);
	
	var shortArray = [
		"Glob has just been "+randomVerb()+" his "+randomNoun(),
		"Glob has just been sat here "+randomVerb()+" his "+randomNouns(),
		"Glob has just been eating "+randomFood(),
		"Glob has just been sipping "+randomDrinkMetric()+" of "+randomDrink()
	];
		
	//--display the text
	mainTextField.text = shortArray[Random.Range(0,shortArray.length)].ToUpper();
	
}

function NewRandomLong () {

	//--choose a random number
	var randomNum : int = Random.Range(0, 100);
		
	var longArray = [
		"Glob has been "+randomEatingVerb()+" "+randomFood(),
		"Glob has been "+randomVerb()+" his "+randomNoun(),
		"Glob has visited "+randomLocation()+" and "+randomVerbed()+" his "+randomNoun(),
		"Glob has visited "+randomLongLocation(),
		"Glob "+randomTransportation()+" to "+randomLocation(),
		"Glob "+randomTransportation()+" to "+randomLocation()+" and "+randomVerbed()+" his "+randomNoun(),
		"Glob has visited "+randomLocation()+" and "+randomVerbed()+" the "+randomNoun(),
		"Glob has visited "+randomLongLocation()+" in "+randomLocation(),
		"Glob visited "+randomLongLocation()+" in "+randomLocation()+" and ate "+randomFood()
	];
	
	//--display the text
	mainTextField.text = longArray[Random.Range(0,longArray.length)].ToUpper();
	
}

function randomNoun() {
	//--single noun, like a body part, or posession
	var theArray = ["jurd", "tak", "jud", "kuq", "hurq", "doog", "druq", "gomble", "grilden smuk", 
		"bobblekin", "fandoflep", "jusset", "tiddlypop", "jandle smoop", "drut", "kludduk", "tark",
		"gad", "grawp", "flarp", "gob", "pomp", "snuck", "smap", "nog", "blob", "fod", "plup"];
	return theArray[Random.Range(0,theArray.length)];
}

function randomNouns() {
	//--plural noun, like "trousers"
	var nounArray = ["jurds", "taks", "juds", "doogles", "smeeples", "wongles", "grildensmuk", 
		"jups", "fleps", "jussets", "doodarps", "handley croops", "plips"];
	return nounArray[Random.Range(0,nounArray.length)];
}

function randomVerb() {
	//-- will be suffixed with "his"
	var verbArray = ["flepping", "brushing", "clipping", "tidying", "fiddling with", "sniffing", 
		"globbing", "boofing", "playing with", "wiping", "stroking", "slobbering on", "jigging", "nogging"];
	return verbArray[Random.Range(0,verbArray.length)];
}

function randomVerbed() {
	//-- past tense. Followed by "his" or "the"
	var verbArray = ["flepped", "brushed", "fiddled with", "sniffed", 
		"globbed", "boofed", "donked", "wiped", "gleebed", "blopped", "stroked", "slobbered all over",
		"glonked", "flobbed", "saw", "caught", "sampled", "tasted", "argued with", "fought", "diddled", 
		"insulted", "splooped", "wrecked"];
	return verbArray[Random.Range(0,verbArray.length)];
}

function randomFood() {
	var foodArray = ["kak", "stewed "+randomNoun(), "poached "+randomCreature()+" eggs", 
		"roasted "+randomCreature()+" bits", "calcified nitro-cheese",  "isotonic mince logs", 
		"tokk", "a "+randomNoun()+" sandwich", "a "+randomNoun()+" baguette",
		"dried fish gems", "microwavable giraffe hexagons", "vegan powder", 
		"BBQ snake puffs", "peach flavoured beetle solution", "chlorinated "+randomNoun()+" curry", 
		"cyber mince", "maggot blops", "grep slop", "gleeb", "burps", "jip"];
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
	var theArray = ["Kangaphin", "Plebian", "Human", "Fleeban", "Corkun", "Nagawak", "Plunkian",
		"Slepan", "Blopan", "Jangon", "Flepian", "Phoonian", "Gongol", "Mongan"];
	return theArray[Random.Range(0,theArray.length)];
	
}

function randomTransportation() {
	//--suffixed with "to"
	var theArray = ["flew", "walked", "hichhiked", "ran", "globbed all the way", "crawled", "slivered",
	"jetted", "beamed", "wibbled", "had a stroll"];
	return theArray[Random.Range(0,theArray.length)];
}

function randomLocation() {
	//--suffixed with "to"
	var theArray = ["Bongle", "Jutt", "Tinklap", "BamTown", "Splip", "Sloop", "Flim",
	"Bloop", "Grip", "Trutt", "Nimp", "Nomp", "FlipTown"];
	return theArray[Random.Range(0,theArray.length)];
	
}

function randomLongLocation() {
	//--suffixed with "to"
	var theArray = [
		"the "+randomEmpire()+" moon of "+randomNoun(), 
		"Lower "+randomNoun(),
		"the county of "+randomLocation(), 
		"the valley of "+randomNouns(),
		"the pit of "+randomNouns(), 
		"the fire caverns of "+randomLocation()];
	return theArray[Random.Range(0,theArray.length)];
	
}



