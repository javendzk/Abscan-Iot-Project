// This code was made by the Abscan team. For more info,
// visit https://github.com/javendzk/Abscan-Iot-Project 

function doGet() {
  var spreadsheet = SpreadsheetApp.openById('DEPLOYED_DATAPROCESS_ID');
  var sheet = spreadsheet.getSheetByName('proccess');
  
  var data = sheet.getRange('C3').getValue();
  
  return ContentService.createTextOutput(data);
}