$(document).ready(function(){
	const $normal = $('#css-filters-example .normal');
	const $image = $('#css-filters-example .image');
	const $xpro2 = $('#css-filters-example .xpro2');
	const $willow = $('#css-filters-example .willow');
	const $walden = $('#css-filters-example .walden');
	const $valencia = $('#css-filters-example .valencia');
	const $toaster = $('#css-filters-example .toaster');
	const $allFilters = $('#css-filters-example .filter');

	$allFilters.on('click', function(){
		$allFilters.removeClass("active");
		$(this).addClass("active");
	});

	$normal.click(function(){
		$image.removeAttr('id', '');
	});

	$xpro2.click(function(){
		$image.removeAttr('id', '');
		$image.attr('id', 'img-xpro2');
	});

	$willow.click(function(){
		$image.removeAttr('id', '');
		$image.attr('id', 'img-willow');
	});

	$walden.click(function(){
		$image.removeAttr('id', '');
		$image.attr('id', 'img-walden');
	});

	$valencia.click(function(){
		$image.removeAttr('id', '');
		$image.attr('id', 'img-valencia');
	});

	$toaster.click(function(){
		$image.removeAttr('id', '');
		$image.attr('id', 'img-toaster');
	});

});
