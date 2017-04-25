var element = document.createElement('div');
element.id = 'testqq';
var el = document.getElementById('testqq');
function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}
  <script>
var whichButton = function (e) {
    // Handle different event models
    var e = e || window.event;
    var btnCode;

    if ('object' === typeof e) {
        btnCode = e.button;

        switch (btnCode) {
            case 0:
                console.log('Left button clicked.');
            break;

            case 1:
                console.log('Middle button clicked.');
            break;

            case 2:
                console.log('Right button clicked.');
            break;

            default:
                console.log('Unexpected code: ' + btnCode);
        }
    }
}
</script>

<button onmouseup="whichButton(event);" oncontextmenu="event.preventDefault();">Click with mouse...</button>



