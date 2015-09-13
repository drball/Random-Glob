#pragma strict
private var timeNow : 

function Start() {
	SaveTime()
	
	timeNow = System.DateTime.Now
	Debug.Log("time is "+timeNow+" "+DateTime.ToString);
}

function timeSinceLastLogin() {
	//--calculate time since last login (in human readable format)
	
	return "John";

}

function SaveTime() {
	//--save datetime right now into local storage
	
//	public float DifferenceTime = System.DateTime.Now - lastTimeSaved ;
}