function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.querySelector('.buttons').classList.toggle('change');
  }

  function copyEmail() {
    var email = "Aidan.Boxall@NCCLondon.ac.uk";
    var tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Email address copied to clipboard");
  }
