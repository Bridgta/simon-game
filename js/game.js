let getLit;
let i;
let on;
let off;
let strict;
let pattern;

let generatedSimonPattern = [];
let simonPattern = [];
let userClick = [];
let randomSimon = 0;
let count = 1;

let bigBoom = function() {
  if (count <= 10) {
    off = 400;
    on = 800;
  } else {
    off = 250;
    on = 500;
  }
  pattern = setInterval(function() {
    if (generatedSimonPattern[randomSimon] == 1) {
      getLit = "greenlit";
      $("#greenPad").addClass(getLit);
      $("#audioGreen")[0].play();
      simonPattern.push(1);
      setTimeout(function() {
        $("#greenPad").removeClass(getLit);
      }, off);
    } else if (generatedSimonPattern[randomSimon] == 2) {
      getLit = "redlit";
      $("#redPad").addClass(getLit);
      $("#audioRed")[0].play();
      simonPattern.push(2);
      setTimeout(function() {
        $("#redPad").removeClass(getLit);
      }, off);
    } else if (generatedSimonPattern[randomSimon] == 3) {
      getLit = "bluelit";
      $("#bluePad").addClass(getLit);
      $("#audioBlue")[0].play();
      simonPattern.push(3);
      setTimeout(function() {
        $("#bluePad").removeClass(getLit);
      }, off);
    } else {
      getLit = "yellowlit";
      $("#yellowPad").addClass(getLit);
      $("#audioYellow")[0].play();
      simonPattern.push(4);
      setTimeout(function() {
        $("#yellowPad").removeClass(getLit);
      }, off);
    }
    randomSimon++;
    if (randomSimon >= count) {
      clearInterval(pattern);
    }
  }, on);
};

function checking() {
  if (simonPattern.length == userClick.length) {
    if (simonPattern.join() == userClick.join()) {
      if (count == 15) {
        setTimeout(function() {
          alert("You HAVE WON THE MILLIONSS");
          location.reload();
        }, 1000);
      } else {
        setTimeout(function() {
          $("#countbtn").text(count + 1);
          count++;
          simonPattern = [];
          userClick = [];
          randomSimon = 0;
          bigBoom();
        }, 1000);
      }
    } else {
      if (strict == 1) {
        location.reload();
      } else {
        setTimeout(function() {
          $("#countbtn").text("XX");
          $("#audioGameOver")[0].play();

          simonPattern = [];
          userClick = [];
          randomSimon = 0;
          bigBoom();
        }, 1000);
      }
    }
  }
}

$("#greenPad").on("click", function() {
  $("#greenPad").addClass("greenlit");
  $("#audioYellow")[0].play();
  userClick.push(1);
  setTimeout(function() {
    $("#greenPad").removeClass("greenlit");
  }, 250);
  checking();
});

$("#redPad").on("click", function() {
  $("#redPad").addClass("redlit");
  $("#audioRed")[0].play();
  userClick.push(2);
  setTimeout(function() {
    $("#redPad").removeClass("redlit");
  }, 250);
  checking();
});

$("#bluePad").on("click", function() {
  $("#bluePad").addClass("bluelit");
  // $("#audioBlue"[0].play();
  userClick.push(3);
  setTimeout(function() {
    $("bluePad").removeClass("bluelit");
  }, 250);
  checking();
});

$("#yellowPad").on("click", function() {
  $("#yellowPad").addClass("yellowlit");
  $("#audioYellow")[0].play();
  userClick.push(4);
  setTimeout(function() {
    $("#yellowPad").removeClass("yellowlit");
  }, 250);
  checking();
});

$("#onBtn").on("click", function() {
  $("#audioOn")[0].play();
  $("#countbtn").text("Go!");
  for (i = 0; i < 15; i++) {
    generatedSimonPattern[i] = Math.ceil(Math.random() * 4);
  }
  $("#strict").on("click", function() {
    strict = 1;
  });
  $("#startbtn").on("click", function() {
    $("#countbtn").text(count);
    bigBoom();
    $("#audioStart")[0].play();
  });
  $("#offBtn").on("click", function() {
    $("#audioGameOver")[0].play();
    location.reload();
  });
});
