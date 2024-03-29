// This code was made by the Abscan team. For more info,
// visit https://github.com/javendzk/Abscan-Iot-Project 

function doGet(e) {
  if (e.parameter.status) {
    var spreadsheet = SpreadsheetApp.openById('DEPLOYED_SHEET_DATAPROCESS_ID);
    var sheet = spreadsheet.getSheetByName('proccess');
    var cell = sheet.getRange('C3');

    cell.setValue(e.parameter.status);

    return ContentService.createTextOutput('Status berhasil diupdate');
  } else {
    return ContentService.createTextOutput('Tidak ada parameter status yang diinput');
  }
}