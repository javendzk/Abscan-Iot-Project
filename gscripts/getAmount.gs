// This code was made by the Abscan team. For more info,
// visit https://github.com/javendzk/Abscan-Iot-Project 

function doGet() {
  var sheet = SpreadsheetApp.openById('DEPLOYED_SHEET_SESSION_ID').getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var checkBreak = 0;
  var checkValue;
  var amount = 0;
  var i = 6;

  while (checkBreak == 0) {
    checkValue = data[i];
    if (!checkValue || checkValue[1] == "" || checkValue[1] == undefined) {
      checkBreak = 1;
    } else {
      amount++;
      i++;
    }
  } 

  return ContentService.createTextOutput(amount);
}
