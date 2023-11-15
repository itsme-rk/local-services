function toggleDropdown() {
  var dropdown = document.getElementById("dropdownContent");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  if (!event.target.closest(".user-circle")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};

function populateStates() {
  // Simulate fetching states from the server based on the selected country
  var country = document.getElementById("country").value;
  var states; // Fetch states based on the selected country

  // Populate the states dropdown
  var stateDropdown = document.getElementById("state");
  stateDropdown.innerHTML =
    "<option value='' disabled selected>Select State</option>";
  for (var i = 0; i < states.length; i++) {
    var option = document.createElement("option");
    option.value = states[i];
    option.text = states[i];
    stateDropdown.add(option);
  }

  // Clear city and area dropdowns
  document.getElementById("city").innerHTML =
    "<option value='' disabled selected>Select City</option>";
  document.getElementById("area").innerHTML =
    "<option value='' disabled selected>Select Area</option>";
}

function populateCities() {
  // Simulate fetching cities from the server based on the selected state
  var state = document.getElementById("state").value;
  var cities; // Fetch cities based on the selected state

  // Populate the cities dropdown
  var cityDropdown = document.getElementById("city");
  cityDropdown.innerHTML =
    "<option value='' disabled selected>Select City</option>";
  for (var i = 0; i < cities.length; i++) {
    var option = document.createElement("option");
    option.value = cities[i];
    option.text = cities[i];
    cityDropdown.add(option);
  }

  // Clear area dropdown
  document.getElementById("area").innerHTML =
    "<option value='' disabled selected>Select Area</option>";
}

function populateAreas() {
  // Simulate fetching areas from the server based on the selected city
  var city = document.getElementById("city").value;
  var areas; // Fetch areas based on the selected city

  // Populate the areas dropdown
  var areaDropdown = document.getElementById("area");
  areaDropdown.innerHTML =
    "<option value='' disabled selected>Select Area</option>";
  for (var i = 0; i < areas.length; i++) {
    var option = document.createElement("option");
    option.value = areas[i];
    option.text = areas[i];
    areaDropdown.add(option);
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};
