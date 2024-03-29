// This code was made by the Abscan team. For more info,
// visit https://github.com/javendzk/Abscan-Iot-Project 

function doGet() {
  var spreadsheet = SpreadsheetApp.openById('DEPLOYED_SHEET_SESSION_ID');
  var timeZone = spreadsheet.getSpreadsheetTimeZone();
  var sheet = spreadsheet.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var jsonData = [];
  var validDataLength = 0;
  var checkValue = 0;
  var checkBreak = 0;
  var i = 6;
  var row = {};

  while (checkBreak == 0) {
    checkValue = data[i];
    if (!checkValue || checkValue[1] == "" || checkValue[1] == undefined) {
      checkBreak = 1;
    } else {
      validDataLength++;
      i++;
    }
  } 

  for (i = 6; i < validDataLength + 6; i++) { 
    row = {};
    row["No"] = data[i][1];
    row["Tanggal"] = Utilities.formatDate(data[i][2], timeZone, "MM/dd/yyyy");
    row["Jam"] = Utilities.formatDate(data[i][4], timeZone, "HH:mm:ss");
    row["Nama"] = data[i][6];
    jsonData.push(row);
  }

  return ContentService.createTextOutput(JSON.stringify(jsonData)).setMimeType(ContentService.MimeType.JSON);
}
