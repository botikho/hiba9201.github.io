const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'ru-RU';
recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const slide = document.querySelector('#speech-recognition-api-demo-1');
let recInPropgress = false;

slide.addEventListener('click', function() {
    if (recInPropgress) {
        recInPropgress = false;
        recognition.stop();
        slide.style.background = 'white';
    } else {
        recInPropgress = true;
        recognition.start();
        slide.style.background = 'grey';
    }
});

recognition.onresult = function(event) {
    slide.style.background = 'white';
	const result = document.querySelector('#speech-recognition-api-demo-1 .result');

	const last = event.results.length - 1;
	const speech = event.results[last][0].transcript || '';
	console.log(speech.toLowerCase());

    if (/(у кого )?лучш(ие|е|ий|ая) летн(ий|ие|яя) школ(ы|а)\??/.test(speech.toLowerCase())) {
        result.classList.add('result_yandex');
        result.innerHTML = '';

        return;
    }

	switch(speech.toLowerCase()) {
		case 'привет':
        case 'привет.':
			result.classList.remove('result_yandex');
			result.innerHTML = 'Добрый вечер!';
			break;
		default:
			result.classList.remove('result_yandex');
			result.innerHTML = 'Что, что, простите?' + ' ' + speech;
	}
};

recognition.onnomatch = function(event) {
    const result = document.querySelector('#speech-recognition-api-demo-1 .result');

    result.classList.remove('result_yandex', 'result_google', 'result_chuck');
    result.innerHTML = 'Что, что, простите?';
    slide.style.background = 'white';
};

recognition.onspeechend = function() {
	recognition.stop();
    slide.style.background = 'white';
};
