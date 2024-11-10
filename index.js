// Tasks
// 1. Create a text that says "Current count: 0"
// 1. Create a primary_button with the text "Count up to 10"
// 2. Create a secondary_button that says "Reset counter"
// 2. Once the primary_button is clicked, we should show a loading spinner inside that primary_button
// 3. Every second, the count should increase by 1, the text should update to reflect the current count ("Current count: 1", "Current count: 2", etc.)
// 4. Once the count reaches 10, the loading spinner should disappear and the primary_button should be disabled
// 5. If the secondary_button is clicked, the count should go back to 0 and the primary_button should be enabled again
//
// https://excalidraw.com/#room=7834ac5308d4ba695fe3,9FAj3m19ZS9z5z_otuEM9g
//

const button = document.querySelector('.button');
const buttonText = document.getElementById('button-text');
const countText = document.getElementById('count');

let count = 0;

const setCountTextToCount = () => {
	countText.innerText = `Current count: ${count}`;
};

const setButtonState = (removeIsLoading = true) => {
	if (removeIsLoading) {
		button.classList.remove('button--loading');
		button.classList.add('button--reset');
		return;
	}
	button.classList.remove('button--reset');
};

const setInnerTextForButton = text => {
	buttonText.innerText = text;
};

button.addEventListener('click', () => {
	if (count === 5) {
		count = 0;
		setCountTextToCount();
		setButtonState(false);
		setInnerTextForButton('Start Counting');
		return;
	}
	const interval = setInterval(() => {
		count += 1;
		setCountTextToCount();
		if (count === 5) {
			setButtonState();
			setInnerTextForButton('Reset Counter');
			clearInterval(interval);
		}
	}, 500);
	// const classList = button.classList;
	// const isButtonLoading = classList.contains('button--loading');
	//
	// if (isButtonLoading) {
	// 	button.classList.remove('button--loading');
	// 	return;
	// }

	button.classList.toggle('button--loading');
});
//
// let timer1Value = 0;
// let timer2Value = 0;
//
// const timerOne = setInterval(() => {
// 	timer1Value += 1;
// 	console.log('Iam timerOne', timer1Value);
// 	// if (timer1Value === 5) {
// 	// 	clearInterval(timerOne);
// 	// }
// }, 1000);
//
// const timerTwo = setInterval(() => {
// 	timer2Value += 1;
// 	console.log('Iam timerTwo', timer2Value);
// 	if (timer2Value === 5) {
// 		clearInterval(timerOne);
// 	}
// }, 1000);
