window.onload = setInterval(function clockInit() {

    // gets the time numbers and makes sure they're formatted correctly

    var d = new Date();
    var timeHr = d.getHours();
    if (timeHr > 12) {
        timeHr = (timeHr - 12);
        var amPm = "PM";
    } else {
        var amPm = "AM";
    }
    var timeMn = d.getMinutes();
    var timeSc = d.getSeconds();

    // create RGB values for time variables

    var R = parseInt((timeHr / 60) * 255);
    var G = parseInt((timeMn / 60) * 255);
    var B = parseInt((timeSc / 60) * 255);

    if (timeSc >= 50) {
        var B = parseInt((60 - timeSc) * 25.5);
    }

    var RGB = ("RGB(" + R + ", " + G + ", " + B + ")");

    function padThaime(number) {
            if (number < 10) {
                var n = "0" + number;
                parseInt(n);
                return n;
            } else {
                return number;
            }
        } // adds '0' at beginning if under 10 to pad it.

    timeHr = padThaime(timeHr);
    timeMn = padThaime(timeMn);
    timeSc = padThaime(timeSc);

    var timeString = (timeHr + ":" + timeMn + ":" + timeSc + " " + amPm)

    // insert clock/RGB into HTML

    $('.colorOverlay').css({
        "backgroundColor": RGB,
        opacity: '0.8'
    });
    $('.clock')[0].innerText = (timeString);

}, 1000);

// window.onload = function() {
// 	$('.fadein').addClass('.active');
// };