$('#dt1').click(function () {
    $('#dt2tab').hide()
    $('#dt1tab').show()
    //dull
    $("#dt2").css({ "background-color": "#F2F2F2", "color": "#8B8B8B" });
    //active
    $("#dt1").css({ "background-color": "#00C7FF", "color": "#FFFFFF" });
})

$('#dt2').click(function () {
    $('#dt1tab').hide()
    $('#dt2tab').show()
    //dull
    $("#dt1").css({ "background-color": "#F2F2F2", "color": "#8B8B8B" });
    //active
    $("#dt2").css({ "background-color": "#00C7FF", "color": "#FFFFFF" });
})

// function upl() {
//     console.log('sub called')
//     // var formData = new FormData(this);
//     var f = $('#inpFile').get(0).files[0]
//     var db = new FormData();
//     db.append('file', f);
//     console.log(db)
//     var objobj = { 'd': 'abcd', 'i': f }
//     $.ajax({
//         type: 'POST',
//         url: 'http://3bf3b163.ngrok.io/postimg/', //	https://api.imgur.com/3/image
//         data: db,
//         cache: false,
//         contentType: false,
//         processData: false,
//         enctype: 'multipart/form-data',
//         success: function (data) {
//             console.log("successfully uploaded");
//             console.log("d" + data);
//         },
//         error: function (data) {
//             console.log("error");
//             console.log("e" + data);
//         }
//     });
// }

function show() {
    if (this.files && this.files[0]) {
        var fr = new FileReader();
        fr.onload = function (data) {
            var img = document.getElementById("uplImage")
            img.src = data.target.result;
            img.style.display = "block";
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.drawImage(img, 10, 10);
            console.log(c.toDataURL())
            // console.log(getBase64Image(img))
        }
        fr.readAsDataURL(this.files[0])
    }
}

function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function toDataURL(src, callback) {
    var image = new Image();
    image.crossOrigin = 'Anonymous';
    image.onload = function () {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        context.drawImage(this, 0, 0);
        var dataURL = canvas.toDataURL('image/jpeg');
        callback(dataURL);
    };
    image.src = src;
}

// toDataURL('https://www.gravatar.com/avatar', function(dataURL) {
//     console.log(dataURL)
// });

$('#finalSubmit').click(function () {
    var formDetails = {
        'name': $('#name').val(),
        'pno': $('#pno').val(),
        'mail': $('#mail').val(),
        'manual': {
            'color': $('#color').val(),
            'model': $('#model').val(),
            'license': $('#license').val()
        },
        'image': ''
    }
    var str = JSON.stringify(formDetails)
    console.log(formDetails)
    $.ajax({
        type: 'POST',
        url: 'http://3bf3b163.ngrok.io/postimg/', //	https://api.imgur.com/3/image
        data: str,
        cache: false,
        contentType: false,
        processData: false,
        enctype: 'multipart/form-data',
        success: function (data) {
            console.log("successfully uploaded");
            console.log("d" + data);
        },
        error: function (data) {
            console.log("error");
            console.log("e" + data);
        }
    });
})

function b64() {

}