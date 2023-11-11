# ABSCAN - Remote RFID Attendance
[![Generic badge](https://img.shields.io/badge/Build-passing-<COLOR>.svg)](https://shields.io/)  [![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

ABSCAN is a remotely monitored RFID-based attendance system for various purposes. Created with the integration of Arduino R3, ESP-01 Wifi, and an independent webserver to utilize its functionalities. This project is open-source and contributions are welcomed.

Presented by Dhafin Hamizan Setiawan, Javana Muhammad Dzaki and Nugroho Ulil Abshar. Github profiles are linked at the bottom. **Administrator dasboard: websiteabscanhehe.com**


## Features
- Register new RFID card number and stores it in database
- Read absence request and sends it with ESP-01 Module
- Display status after RFID scan on 20x2 LCD Display
- Enable and disable functionality remotely via website
- Clear the session's attendace field to start a new session 
- Export attendace data (NAME, CATEGORY, TIME) into a spreadsheet

## Hardware Requirements
| Quantity | Name |
| ------ | ------ |
| 1 | Arduino UNO R3 |
| 1 | ESP8266-01 Wifi Module |
| 1 | ESP8266-01 Breadboard adaptor |
| 1 | MFRC522 RFID Reader & Cards |
| 1 | I2C Soldered 2x20 LCD Display |
| 1 | Breadboard |
| 25 | Jumper Wires |

## Connection Diagram
<foto connection diagram>

## Flashing ESP8266-01 Module 
<foto flashing esp8266>
1. Connect your computer to Arduino via USB
2. Connect ESP8266-01 Module to Arduino like the image above
3. Create a new sketch on Arduino IDE, upload an empty code
4. Open `abscan_wifi_module.ino` click File > Preferences
5. Type *http://arduino.esp8266.com/stable/package_esp8266com_index.json* in additional boards
6. Click Tools > Board > Board Manager, type *esp8266* and install it
7. On the selected board, find "Generic Esp8266 Module" then select port and upload the code
8. If it shows "Connecting ....----....." on output monitor, hold RST Pushbutton for 2s
9. Flashing is completed if you see "Hard Resetting Via RTS Pin"

## Uploading Code to Arduino UNO R3
1. Imitate the cable connection shown in the provided connection diagram
2. GND and VCC wiring is completely configurable. Just make sure the connection is exact
3. Open `abscan_arduino_code.ino` on Arduino IDE
4. Select Arduino UNO R3 as the board and the corresponding COM Port
5. Upload the sketch

## Functions and Documentation
View the pdf via `abscan_documentation.pdf` or click [here](drive.google.com/linkFilePDF)

## Author Github Pages
- https://github.com/javendzk
- https://github.com/lilznug
- https://github.com/dhafinhs 
 
