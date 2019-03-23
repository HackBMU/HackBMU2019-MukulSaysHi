/*
var link = "http://3bf3b163.ngrok.io/postimg/";

var obj={data:'56vdfv'}

$("#get").click(function () {
    console.log('accessing get')
    $.get(link, function (data) {
        console.log(data)
    });
});

$("#post").click(function () {
    console.log('accessing post')
    var saveData = $.ajax({
        type: 'POST',
        url: link,
        data: obj,
        dataType: "text",
        success: function (resultData) { console.log('return data'+resultData) }
    });
});
*/

// function openCity(evt, cityName) {
//     var i, x, tablinks;
//     x = document.getElementsByClassName("city");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablink");
//     for (i = 0; i < x.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace("", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += "";
// }

$('#dt1').click(function(){
    $('#dt2tab').hide()
    $('#dt1tab').show()
    //dull
    $("#dt2").css({"background-color": "#F2F2F2", "color": "#8B8B8B"});
    //active
    $("#dt1").css({"background-color": "#00C7FF", "color": "#FFFFFF"});
})

$('#dt2').click(function(){
    $('#dt1tab').hide()
    $('#dt2tab').show()
    //dull
    $("#dt1").css({"background-color": "#F2F2F2", "color": "#8B8B8B"});
    //active
    $("#dt2").css({"background-color": "#00C7FF", "color": "#FFFFFF"});
})