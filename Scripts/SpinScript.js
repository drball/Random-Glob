#pragma strict

public var spinAmt : float = 0;

function Start () {
	GetComponent.<Rigidbody2D>().AddTorque(spinAmt);
}