$(function() {

$(".podcastlink").on("click", function(event) {
  event.preventDefault()
  var elementThatWasClicked = $(this)
  console.log(elementThatWasClicked)
  elementThatWasClicked.parents(".iconlevel").remove()


})



})
