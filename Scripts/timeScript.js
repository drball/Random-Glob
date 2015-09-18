#pragma strict
import System; // introduce DateTime to the script

//private var lastLoginTime : Date;

function Start() {

	//--save this time for next time
	PlayerPrefs.SetString("lastLoginTime", System.DateTime.Now.ToString() );
	
}

public function lastLoginTimeFormatted() {
	//--returns how long ago the user last logged in 
	
	var timeNow : Date = System.DateTime.Now;
	
	var savedDate : String = PlayerPrefs.GetString("lastLoginTime");
	if(savedDate == "") {
		// convert current date to string...
         savedDate = timeNow.ToString();
	}
	
	//--convert to date
	var lastLoginTime: DateTime;
    DateTime.TryParse(savedDate, lastLoginTime);
		
	var days = (timeNow - lastLoginTime).Days;
	var minutes = (timeNow - lastLoginTime).Minutes;
	var hours = (timeNow - lastLoginTime).Hours;
	var seconds = (timeNow - lastLoginTime).Seconds;
	var weeks = days / 7;
	var years = days / 365; //wrong but near enough
 	
 	if (years > 0) {
		return years + " years";  
	} else if (weeks > 0) {
		return weeks + " weeks";
	} else if (days > 0) {
		return days + " days"; 
	} else if (hours > 0) {
		return hours + " hours";
	} else if (minutes > 0) {
		return minutes + " minutes";
	} else {
		return seconds + " seconds";
	}
}

public function lastLoginTimeHours() {

	var timeNow : Date = System.DateTime.Now;
	
	var savedDate : String = PlayerPrefs.GetString("lastLoginTime");
	if(savedDate == "") {
		// convert current date to string...
         savedDate = timeNow.ToString();
	}
	
	//--convert to date
	var lastLoginTime: DateTime;
    DateTime.TryParse(savedDate, lastLoginTime);
		
	return (timeNow - lastLoginTime).Hours;

}

public function lastLoginTimeMins() {

	var timeNow : Date = System.DateTime.Now;
	
	var savedDate : String = PlayerPrefs.GetString("lastLoginTime");
	if(savedDate == "") {
		// convert current date to string...
         savedDate = timeNow.ToString();
	}
	
	//--convert to date
	var lastLoginTime: DateTime;
    DateTime.TryParse(savedDate, lastLoginTime);
		
	return (timeNow - lastLoginTime).Minutes;

}


