$('.title').on('click', function () {$('.toggle-video').toggleClass('toggle-video--active');});
$('.toggle').on('click', function () {$('.toggler').toggleClass('toggler--active');});
$('.toggle-subtitle__varsAndTypes').on('click', function () {$('.toggler-card__varsAndTypes').toggleClass('toggler-card__varsAndTypes--active');});
$('.toggle-subtitle__objects').on('click', function () {$('.toggler-card__objects').toggleClass('toggler-card__objects--active');});


$('.toggle-expressions').on('click', function () {
  $('.toggler-expressions').toggleClass('toggler-expressions--active');
});

$('.toggle-vars').on('click', function () {
  $('.toggler-vars').toggleClass('toggler-vars--active');
});

$('.toggle-primitive').on('click', function () {
  $('.toggler-primitive').toggleClass('toggler-primitive--active');
});

$('.toggle-typelink').on('click', function () {
  $('.toggler-typelink').toggleClass('toggler-typelink--active');
});

$('.toggle-dynamic').on('click', function () {
  $('.toggler-dynamic').toggleClass('toggler-dynamic--active');
});

$('.toggle-objects').on('click', function () {
  $('.toggler-objects').toggleClass('toggler-objects--active');
});