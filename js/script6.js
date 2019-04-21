function taskSix_onclick(opType) {

	let task6 = document.getElementById('task6');

	let board = document.createElement('div');
	board.classList.add('board');
	for (let i = 0; i < 8; i++) {
		for (let k = 0; k < 8; k++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			cell.classList.add((i % 2 == 0) ^ (k % 2 == 0) ? 'white' : 'black');
			board.appendChild(cell);
		}
	}
	let clrfix = document.createElement('div');
	clrfix.classList.add('clrfix');
	board.appendChild(clrfix);
	task6.appendChild(board);
}
