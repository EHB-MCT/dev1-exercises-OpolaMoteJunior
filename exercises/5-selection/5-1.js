"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

drwaFlag();

function drawFlag() {
	let width = window.innerWidth;
	let height = window.innerHeight;

	for (let i = 0; i <= 100000; i++) {
		let posX = Math.floor(Math.random() * (width / 2));
		let posy = Math.floor(Math.random() * height);

		Utils.fillcircle(posX, posy, 2, "darkGreen");
	}
	for (let i = 0; i <= 100000; i++) {
		let posX = Math.floor(Math.random() * (width / 2));
		let posy = Math.floor(Math.random() * height);

		Utils.fillcircle(posX, posy, 2, "red");
	}
}
