document.addEventListener("DOMContentLoaded", function() {
    var menuItem = document.getElementsByClassName("menu-item")[0];
    
    menuItem.addEventListener("mouseover", function() {
      var submenu = this.getElementsByClassName("submenu")[0];
      submenu.style.display = "block";
    });
    
    menuItem.addEventListener("mouseout", function() {
      var submenu = this.getElementsByClassName("submenu")[0];
      submenu.style.display = "none";
    });
  });