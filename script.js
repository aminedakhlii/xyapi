import Axis from "./axis.js";

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
let image = document.getElementById("myimg");

let cursor = document.createElement("span");
let label_h = document.createElement("label");
let label_v = document.createElement("label");

canvas.style =
	"position : absolute ;   	background-color: rgba(255,255,255,0.7);border-radius : 12px";
cursor.style =
	"position: absolute;border-radius: 100%;width: 10px;height: 10px;color: transparent;border: 1px solid black;";

label_v.style = "position: absolute; color:blac;z-index:2;";
label_h.style = "position: absolute; color:black; z-index :2";

let image_x = image.offsetLeft;
let image_y = image.offsetTop;

let y = image_y + image.height / 3;
let x = image_x + image.width / 3;
let w = image.width / 3;
let h = image.height / 2;

// Set cursor initial position
cursor.style.left = x + "px";
cursor.style.top = y + h - 18 + "px";

canvas.style.top = y + "px";
canvas.style.left = x + "px";
canvas.style.width = w + "px";
canvas.style.height = h + "px";
canvas.style.position = "absolute";

label_h.style.top = y + h - 20 + "px";
label_h.style.left = x + w / 2 - 20 + "px";
label_v.style.top = y + h / 2 - 20 + "px";
label_v.style.left = x + "px";

image.parentNode.appendChild(canvas, image.nextSibling);
image.parentNode.insertBefore(cursor, image.nextSibling);
image.parentNode.insertBefore(label_h, image.nextSibling);
image.parentNode.insertBefore(label_v, image.nextSibling);

ctx.strokeStyle = "red";
ctx.lineWidth = 1;

let axis_x = new Axis(5, h - 60, w + 50, h - 60);
axis_x.setContext(ctx);

let axis_y = new Axis(5, 5, 5, h);
axis_y.setContext(ctx);
axis_x.draw();
axis_y.draw();

document.onmousemove = function (event) {
	let cx = event.pageX;
	let cy = event.pageY;
	if (cx < x + w && cx > x && cy < y + h && cy > y) {
		cursor.style.left = event.pageX - 12 + "px";
		cursor.style.top = event.pageY - 12 + "px";
		let percentage_x = Math.floor(((cx - x) / w) * 100);
		let percentage_y = Math.floor(((cy - y) / h) * 100);
		label_h.innerHTML = percentage_x + "%";
		label_v.innerHTML = 100 - percentage_y + "%";
		axis_x.remove();
		axis_y.remove();
		axis_x.set(5, h - 60, (percentage_x / 100) * w, h - 60);
		axis_x.draw();
		axis_y.set(5, (percentage_y / 100) * h, 5, h);
		axis_y.draw();
	}
};
document.onclick = function (event) {
	let cx = event.pageX;
	let cy = event.pageY;
	if (cx < x + w && cx > x && cy < y + h && cy > y) {
		let percentage_x = Math.floor(((cx - x) / w) * 100);
		let percentage_y = Math.floor(((cy - y) / h) * 100);
		console.log(percentage_x + "%");
		console.log(100 - percentage_y + "%");
	}
};
