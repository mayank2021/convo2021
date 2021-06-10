var finaltime=new Date("June 15, 2021 11:00:00").getTime();
timer();
setInterval(timer,1000);
function timer()
{
    var now=new Date().getTime();
    var distance=finaltime-now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $(".days").text(days);
  $(".hours").text(hours);
  $(".minutes").text(minutes);
  $(".seconds").text(seconds);
}
