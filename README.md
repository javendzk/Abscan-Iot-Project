# ABSCAN - Remote RFID Attendance
[![Generic badge](https://img.shields.io/badge/Build-passing-<COLOR>.svg)](https://shields.io/)  [![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

ABSCAN is a remote monitored RFID-based attendance system applicable for various purposes. Created with the integration of NodeMCU V3, Google App Scripts, and an independent webserver to utilize its functionalities. This project is an open-source learning project and contributions are welcomed.

Presented by Dhafin Hamizan Setiawan, Javana Muhammad Dzaki and Nugroho Ulil Abshar. Github profiles are linked at the bottom. 


## Features
- 

## Hardware Requirements
| Quantity | Name |
| ------ | ------ |
| 1 | NodeMCU V3 ESP8266 |
| 1 | MFRC522 RFID Reader & Cards |
| 1 | I2C Interfaced 16x2 LCD Display |
| 1 | Breadboard / PCB Dot Matrix |
| - | Wires & Solder |

## Connection Diagram
![alt text](https://github.com/javendzk/Abscan-Iot-Project/blob/main/documentation/Abscan%20V2%20-%20ESP8266%20Connection%20Diagram.png?raw=true)

## Flashing ESP8266 via Arduino IDE 
1. Connect your computer to Arduino via USB
2. Connect ESP8266-01 Module to Arduino like the image above
3. Create a new sketch on Arduino IDE, upload an empty code
4. Open `abscan_wifi_module.ino`. Edit SSID and PASSWORD to nearby wifi route.
5. click File > Preferences and type *http://arduino.esp8266.com/stable/package_esp8266com_index.json* in additional boards
6. Click Tools > Board > Board Manager, type *esp8266* and install it
7. On the selected board, find "Generic Esp8266 Module" then select port and upload the code
8. If it shows "Connecting ....----....." on output monitor, hold RST Pushbutton for 2s
9. Flashing is completed if it outputs "Hard Resetting Via RTS Pin"

## Deploying Gscripts & Spreadsheets
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
 
