// This code was made by the Abscan team. For more info,
// visit https://github.com/javendzk/Abscan-Iot-Project 

function doGet(e) {
  if (e.parameter.rfid && e.parameter.name) {
    var spreadsheet = SpreadsheetApp.openById('DEPLOYED_SHEET_DATAPROCESS_ID');
    var sheet = spreadsheet.getSheetByName('database');
    var data = sheet.getDataRange().getValues();
    var checkBreak = 0;
    var checkValue;
    var nomor = 1;

    while(checkBreak == 0) {
      checkValue = data[(nomor + 2)];
      if (!checkValue || checkValue[1] == "" || checkValue[1] == undefined) {
        checkBreak = 1;
      }
      else {
        nomor++;
      }
    } 

    sheet.getRange('B'+ (nomor + 3)).setValue(nomor);
    sheet.getRange('C'+ (nomor + 3)).setValue(e.parameter.rfid);
    sheet.getRange('D'+ (nomor + 3)).setValue(e.parameter.name);

   return ContentService.createTextOutput('Database berhasil ditambahkan')
  } 
  else {
    return ContentService.createTextOutput('Gagal menambahkan database');
  }
}