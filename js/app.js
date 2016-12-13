window.onload = function() {
 function playsound(e){
			const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
			const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
			if (!audio) return; // stop the function from running all together
			audio.currentTime = 0; // rewind to the start
			audio.play();
			key.classList.add('playing');
			console.log(key);
		}

function removeTransition(e){
	if(e.propertyName !== 'transform') return; // skip it if is not transform
	this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

keys.forEach(function(c){
	c.addEventListener('click', function(){
		if(c.id =="clap"){
			const audioClap = document.querySelector(`audio[data-key="65"]`);
			audioClap.currentTime = 0;
			audioClap.play();
			c.classList.add('playing');
		} else

		if (c.id =="tinn") {
			const audioTinn = document.querySelector(`audio[data-key="83"]`);
			audioTinn.currentTime = 0;
			audioTinn.play();
			c.classList.add('playing');
		} else

		if (c.id =="boom") {
			const audioBoom = document.querySelector(`audio[data-key="68"]`);
			audioBoom.currentTime = 0;
			audioBoom.play();
			c.classList.add('playing');
		} else

		if (c.id =="tumm") {
			const audioTumm = document.querySelector(`audio[data-key="70"]`);
			audioTumm.currentTime = 0;
			audioTumm.play();
			c.classList.add('playing');	
		} else
 
		if (c.id =="tomm") {
			const audioTomm = document.querySelector(`audio[data-key="71"]`);
			audioTomm.currentTime = 0;
			audioTomm.play();
			c.classList.add('playing');
		} else

		if (c.id =="tumm2") {
			const audioTumm2 = document.querySelector(`audio[data-key="72"]`);
			audioTumm2.currentTime = 0;
			audioTumm2.play();
			c.classList.add('playing');
		} else

		if (c.id=="dee") {
			const audioDee = document.querySelector(`audio[data-key="74"]`);
			audioDee.currentTime = 0;
			audioDee.play();
			c.classList.add('playing');
		} else

		if (c.id=="tom") {
			const audioTom = document.querySelector(`audio[data-key="75"]`);
			audioTom.currentTime = 0;
			audioTom.play();
			c.classList.add('playing');
		} else

		if (c.id=="tum") {
			const audioTum = document.querySelector(`audio[data-key="76"]`);
			audioTum.currentTime = 0;
			audioTum.play();
			c.classList.add('playing');
		}
	});
});

window.addEventListener('keydown', playsound);

};












