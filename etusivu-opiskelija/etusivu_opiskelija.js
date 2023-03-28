function topNavFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "navigation") {
      x.className += "responsive";
    } else {
      x.className = "navigation";
    }
  }

  