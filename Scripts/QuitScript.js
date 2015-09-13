#pragma strict

function Start () {

}

function Update () {


	 if(Input.GetKeyDown(KeyCode.Escape) == true)
	 {
	 	Quit();
	 }
	 

}

function Quit() {
	Debug.Log("quitting");
	Application.Quit();
}