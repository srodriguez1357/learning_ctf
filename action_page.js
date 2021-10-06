
  function user1() {
  var user = document.getElementById('uname').value
  var pass = document.getElementById('psw').value
  if (user == "surimi" && pass == "surimi") {
    window.open("javascript_trial.html")
    alert('correct username')
  } else {
    alert('incorrect username or password')
  }
}
