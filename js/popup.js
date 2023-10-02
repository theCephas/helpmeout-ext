var btn = document.getElementById('btn');
var leftButton = document.getElementById('toggle-btn-left');
var rightButton = document.getElementById('toggle-btn-right');
var btn2 = document.getElementById('btn2');
var leftButton2 = document.getElementById('toggle-btn-left2');
var rightButton2 = document.getElementById('toggle-btn-right2');
var isLeft = true;
var isLeft2 = true;

function togglePosition() {
    if (isLeft) {
        btn.style.left = '25px';
    } else {
        btn.style.left = '0px';
    }
    isLeft = !isLeft;
}

function togglePosition2() {
    if (isLeft2) {
        btn2.style.left = '25px';
    } else {
        btn2.style.left = '0px';
    }
    isLeft2 = !isLeft2;
}

leftButton.addEventListener("click", togglePosition);
rightButton.addEventListener("click", togglePosition);
leftButton2.addEventListener("click", togglePosition2);
rightButton2.addEventListener("click", togglePosition2);

var close = document.getElementById('close');

document.addEventListener("DOMContentLoaded", () => {
  const startRecordingButton = document.getElementById("startVideo");

  startRecordingButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "request_recording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.error(
              JSON.stringify(chrome.runtime.lastError),
              "error line 49"
            );
          }
        }
      );
    });
  });
});