// This code was made by the Abscan team. For more info,
// visit https://github.com/javendzk/Abscan-Iot-Project 

function doGet() {
  var sheet = SpreadsheetApp.openById('1GrHJBza9GMbXkHatpmFPlc_41beOCaP1MbRnRwIRMpo').getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var currentDate = new Date();
  var currentTime = new Date();
  var formattedDate = Utilities.formatDate(currentDate, 'GMT+7', 'MM/dd/yyyy');
  var formattedTime = Utilities.formatDate(currentTime, 'GMT+7', 'HH:mm:ss');
  var dateCell = sheet.getRange('D2');
  var timeCell = sheet.getRange('D3');
  var amountCell = sheet.getRange('D4');
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

  amountCell.setValue(amount);
  dateCell.setValue(formattedDate);
  timeCell.setValue(formattedTime);

  return ContentService.createTextOutput(amount);
}
