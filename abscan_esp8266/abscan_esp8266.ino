#include <ESP8266WiFi.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <MFRC522.h>
#include <ESP8266HTTPClient.h>

const char *ssid = "UBAH_SSID_WIFI";
const char *password = "UBAH_PASSWORD_WIFI";
const char *scriptUrl = "UBAH_URL_presenceHandler";

LiquidCrystal_I2C lcd(0x27, 16, 2);

#define SS_PIN 4
#define RST_PIN 3
MFRC522 mfrc522(SS_PIN, RST_PIN);

void setup() {
  Serial.begin(115200);
  connectToWiFi();
  lcd.begin(16, 2);
  lcd.print("Loading");

  SPI.begin();
  mfrc522.PCD_Init();
}

void loop() {
  if (mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial()) {
    String rfid = getRFID();
    processAttendance(rfid);
    mfrc522.PICC_HaltA();
  }
}

void connectToWiFi() {
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

String getRFID() {
  String rfid = "";
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    rfid += String(mfrc522.uid.uidByte[i], HEX);
  }
  return rfid;
}

void processAttendance(String rfid) {
  String url = scriptUrl + "?rfid=" + rfid;
  HTTPClient http;

  lcd.setCursor(0, 1);
  lcd.print("Fetching data...");

  if (http.begin(url)) {
    int httpCode = http.GET();
    if (httpCode == HTTP_CODE_OK) {
      String response = http.getString();
      char result = response.charAt(0);

      switch (result) {
        case '0':
          lcd.clear();
          lcd.print("Presensi tidak dibuka");
          break;
        case '1':
          lcd.clear();
          lcd.print("RFID tidak dikenali");
          break;
        case '2':
          lcd.clear(); 
          String nama = response.substring(1);
          Serial.println("Nama: " + nama);
          lcd.setCursor(0, 2);
          lcd.print("%s", nama);
          lcd.setCursor(0, 1);
          lcd.print("Presensi berhasil");
         
          break;
        default:
          lcd.clear();
          lcd.print("Error");
      }
    } else {
      lcd.clear();
      lcd.print("HTTP error");
    }

    http.end();
  } else {
    lcd.clear();
    lcd.print("Unable to connect");
  }
}
