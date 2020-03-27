function openTab(evt, tab_name){
  var i, tabcontent, tablinks;

  document.getElementsByTagName("body")[0].style.overflow = "hidden";

  tabcontent = document.getElementsByClassName("tabcontent");
  for(i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.visibility = "hidden";
    tabcontent[i].style.opacity = 0;
    tabcontent[i].style.position = "absolute";
    tabcontent[i].style.height = "100%";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tab_name).style.visibility = "visible";
  document.getElementById(tab_name).style.opacity = 1;

  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();