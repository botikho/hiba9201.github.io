// запуск видео с gpu
(function () {
	const slides = [
		'#webgl-speed-video',
		'#webgl-weather',
		'#practise-example-app-demo',
		'#practise-example-population',
		'#svg-morphing'
	];

	slides.forEach(slide => {
		const $slide = $(slide);
		const $video = $slide.find('video')[0];

		$slide.attrchange({
			trackValues: true,
			callback: function (event) {
				if (event.attributeName !== 'class')
					return;

				if (!/active/.test(event.newValue)) {
					$video.pause();
					$video.currentTime = 0;

					return;
				}

				// запускаем видео
				$video.play();
			}
		});
	});
}());

// demo рисований
(function () {
	const $demos = $('.demo');

	$demos.each((i, demo) => {
		const $demo = $(demo);
		const $results = $demo.find('.result > div');
		const $codes = $demo.find('.code > div');
		const $controls = $demo.find('.controls > button');

		$controls.each((i, control) => {
			const $control = $(control);

			$control.on('click', () => {
				$results.hide();
				$codes.hide();

				$results.eq(i).fadeIn();
				$codes.eq(i).fadeIn();
			});
		});
	});
}());
