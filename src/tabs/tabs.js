function openTab(e, tabId) {
  var links = document.querySelectorAll("div.tabs button");
  var content = document.getElementsByClassName("tab");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace("active", "");
  }
  document.getElementById(tabId).style.display = "block";
  e.currentTarget.className += " active";
}