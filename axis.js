export default class axis {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	set(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	setContext(ctx) {
		this.ctx = ctx;
	}
	draw() {
		this.ctx.beginPath(); // Start a new path
		this.ctx.moveTo(this.x, this.y);
		this.ctx.lineTo(this.x, this.y + this.h);
		this.ctx.stroke();
		this.ctx.beginPath(); // Start a new path
		this.ctx.moveTo(this.x, this.y);
		this.ctx.lineTo(this.x + this.w, this.y);
		this.ctx.stroke();
	}
	remove() {
		this.ctx.clearRect(this.x - 2, this.y - 2, this.w + 2, this.h + 2);
	}
}
