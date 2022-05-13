$('.title').on('click', function () {$('.toggle-video').toggleClass('toggle-video--active');});
$('.toggle').on('click', function () {$('.toggler').toggleClass('toggler--active');});


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