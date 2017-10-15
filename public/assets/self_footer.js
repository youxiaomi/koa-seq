function goPage (newURL) {

  // if url is empty, skip the menu dividers and reset the menu selection to default
  if (newURL != "") {

    // if url is "-", it is this page -- reset the menu:
    if (newURL == "-" ) {
      resetMenu();
    }
    // else, send page to designated URL
    else {
      document.location.href = newURL;
    }
  }
}

// resets the menu selection upon entry to this page:
function resetMenu() {
  document.gomenu.selector.selectedIndex = 2;
}