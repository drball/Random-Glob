#pragma strict
public var menuPanel : GameObject;

function Start () {

	HidePanel();
}

function HidePanel() {
	menuPanel.SetActive(false); 

}

function ShowPanel() {
	menuPanel.SetActive(true);
}