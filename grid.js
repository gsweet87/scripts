  function addRow() {
  var table = document.getElementById("grid");
  var row = table.insertRow();

  var nameCell = row.insertCell();
  var ageCell = row.insertCell();
  var emailCell = row.insertCell();

  nameCell.contentEditable = true;
  ageCell.contentEditable = true;
  emailCell.contentEditable = true;
}
