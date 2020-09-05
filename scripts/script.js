

const Scene = require('Scene');
const Time = require('Time');
const TouchGestures = require('TouchGestures');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

const fortunes = [
'A beautiful, smart,and loving person\nwill be coming into your life.',
'A dubious friend may be\nan enemy in camouflage.', 
'A faithful friend is a strong defense.', 
'A fresh start will put you on your way.', 
'A friend asks only for your time not your money.', 
'A friend is a present you give yourself.', 
'A golden egg of opportunity\nfalls into your lap this month.',
'A good friendship is often more important\nthan a passionate romance.'
];

(async function() {

const [text] = await Promise.all([
    Scene.root.findFirst('text0')
]);


TouchGestures.onLongPress(text).subscribe(function () {
  const countdownTimer = Time.setInterval(function () {
  	
  	text.text = fortunes[getRandomNum()];
  }, 100);

	
Time.setTimeout(function () {
	        Time.clearInterval(countdownTimer);
	}, 5000);
})

})();


function getRandomNum() { 
	return Math.floor(Math.random() * fortunes.length)
}

