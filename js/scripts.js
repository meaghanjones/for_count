$(document).ready(function() {
  $("button").click(function() {
    var increment = parseInt($("#number_increment").val());
    var total = parseInt($("#total_number").val());
    if (!increment || !total) {
      alert("You did it wrong.");
    } else if (increment <= 0) {
      alert("Can't have a negative increment.");
    } else if (total <= 0) {
      for (var counter = 0; counter >= total; counter -= increment) {
        $(".output ul").append("<li>" + counter + "</li>");
      }
    } else if (total <=increment) {
      alert("The total must be greater than the increment.");
    }
    for (var counter = 0; counter <= total; counter += increment) {
      $(".output ul").append("<li>" + counter + "</li>");
    }
  });
});
