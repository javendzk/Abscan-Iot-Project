// This code was made by the Abscan team. For more info,
// visit https://github.com/javendzk/Abscan-Iot-Project 

function doGet(e) {
  var rfidValue = e.parameter.rfid;
  var spreadsheet = SpreadsheetApp.openById('DEPLOYED_SHEET_DATAPROCESS_ID');
  var sheet1 = spreadsheet.getSheetByName('proccess'); 
  var status = sheet1.getRange('C3').getValue();
  var sheet2 = spreadsheet.getSheetByName('database');
  var data = sheet2.getDataRange().getValues();
  var spreadsheet2 = SpreadsheetApp.openById('DEPLOYED_SHEET_SESSION_ID');
  var sheet3 = spreadsheet2.getActiveSheet();
  var data3 = spreadsheet2.getDataRange().getValues();
  
  if (status.toString().toUpperCase() === "TRUE") {
    var checkBreak = 0;
    var i = 0;
    
    while (checkBreak == 0) { 
      checkValue = data[i+3];
      if (!checkValue || checkValue[1] == "" || checkValue[1] == undefined) {
        checkBreak = 1;
      } else if (rfidValue == checkValue[2]) {
        checkBreak = 2;
      }
      i++;
    }

    if(checkBreak == 2) {
      var nomor = 1;
      var checkAbsen = 0;
      var checkDataAbsen;
      i = 0;

      while (checkAbsen == 0) {
        checkDataAbsen = data3[6+i];
        if (!checkDataAbsen || checkDataAbsen[1] == "" || checkDataAbsen[1] == undefined) {
          checkAbsen = 1;
        } else {
          nomor++;
        }
        i++;
      }

      var currentDate = new Date();
      var currentHour = new Date();
      var formattedDate = Utilities.formatDate(currentDate, "GMT+7", "MM/dd/yyyy");
      var formattedHour = Utilities.formatDate(currentHour, "GMT+7", "HH:mm:ss");

      sheet3.getRange('B'+ (nomor + 6)).setValue(nomor);
      sheet3.getRange('C'+ (nomor + 6)).setValue(formattedDate);
      sheet3.getRange('E'+ (nomor + 6)).setValue(formattedHour);
      sheet3.getRange('G'+ (nomor + 6)).setValue(checkValue[3]);

      var successReturn = '2' + checkValue[3];
      return ContentService.createTextOutput(successReturn);

     } else if(checkBreak == 1) {
      return ContentService.createTextOutput('1');
     }

  } else {
    return ContentService.createTextOutput('0');
  }
}
