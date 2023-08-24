function applyDarkMode() {
  const toggleImage = document.getElementById("Toggel-image");
  const Toggelimage = document.getElementById("Toggelimage");
  const darkMoodButton = document.getElementById("darker");
  const screnSmallDarkmoodBtn = document.getElementById("darkme");
  const body = document.body;

  // Retrieve the dark mode state from localStorage
  let isDarkMode = localStorage.getItem("darkMode") === "true";

  // Apply the initial dark mode state
  if (isDarkMode) {
    body.classList.add("dark-mode");
    toggleImage.classList.add("dark-mode");
    toggleImage.src = "./images/white.png";
    Toggelimage.src = "./images/white.png";
  } else {
    toggleImage.src = "./images/dark.png";
    Toggelimage.src = "./images/dark.png";
  }

  darkMoodButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    toggleImage.classList.toggle("dark-mode");

    if (isDarkMode) {
      toggleImage.src = "./images/dark.png";
      Toggelimage.src = "./images/dark.png";
    } else {
      toggleImage.src = "./images/white.png";
      Toggelimage.src = "./images/white.png";
    }
    isDarkMode = !isDarkMode;

    // Save the dark mode state to localStorage
    localStorage.setItem("darkMode", isDarkMode);
  });

  screnSmallDarkmoodBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    toggleImage.classList.toggle("dark-mode");

    if (isDarkMode) {
      toggleImage.src = "./images/dark.png";
      Toggelimage.src = "./images/dark.png";
    } else {
      toggleImage.src = "./images/white.png";
      Toggelimage.src = "./images/white.png";
    }
    isDarkMode = !isDarkMode;
    localStorage.setItem("darkMode", isDarkMode);
  });
}
applyDarkMode();

$(document).ready(function () {
  $(".feedo .fa-heart").click(function () {
    $(this).toggleClass("red-text");
  });
});
// start upload image 
var btnUpload = $("#upload_file"),
  btnOuter = $(".button_outer");
btnUpload.on("change", function (e) {
  var ext = btnUpload.val().split(".").pop().toLowerCase();
  if ($.inArray(ext, ["gif", "png", "jpg", "jpeg"]) == -1) {
    $(".error_msg").text("Not an Image...");
  } else {
    $(".error_msg").text("");
    btnOuter.addClass("file_uploading");
    setTimeout(function () {
      btnOuter.addClass("file_uploaded");
    }, 3000);
    var uploadedFile = URL.createObjectURL(e.target.files[0]);
    setTimeout(function () {
      $("#uploaded_view")
        .append('<img src="' + uploadedFile + '" />')
        .addClass("show");
    }, 3500);
  }
});
$(".file_remove").on("click", function (e) {
  $("#uploaded_view").removeClass("show");
  $("#uploaded_view").find("img").remove();
  btnOuter.removeClass("file_uploading");
  btnOuter.removeClass("file_uploaded");
});
// end upload image 