# ABSCAN - Remote RFID Attendance

[![Generic badge](https://img.shields.io/badge/Build-passing-<COLOR>.svg)](https://shields.io/) [![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity) ![](https://img.shields.io/badge/Version-2.0-blue)

ABSCAN is a remotely monitored RFID-based attendance system applicable for various purposes. Created with the integration of NodeMCU v3, Google App Scripts, and an independent web server to utilize its functionalities. This project is an open-source learning project, and contributions are welcomed.

Presented by Dhafin Hamizan Setiawan, Javana Muhammad Dzaki, and Nugroho Ulil Abshar. GitHub profiles are linked at the bottom.

## Features
- Register new RFID tag ID and automatically post it into the database
- User is registered into session only 1s after scan, 3s on webserver
- Enable and disable hardware functionality remotely via webserver
- Clear the session's registered users with the click of a button
- Display names from the database on a 16x2 LCD Display
- Export entire session data into `.xlsx`, it counts for you too!

## Hardware Requirements
| Quantity | Name                                 |
| -------- | ------------------------------------ |
| 1        | NodeMCU v3 ESP8266                   |
| 1        | MFRC522 RFID Reader & Cards          |
| 1        | I2C Interfaced 16x2 LCD Display      |
| 1        | Breadboard / PCB Dot Matrix          |
| -        | Wires & Solder                       |

## Connection Diagram
![Connection Diagram](https://github.com/javendzk/Abscan-Iot-Project/blob/main/documentation/Abscan%20V2%20-%20ESP8266%20Connection%20Diagram.png?raw=true)

## Flashing ESP8266 via Arduino IDE
1. Imitate the connections shown in the provided diagram
2. Connect your computer to NodeMCU v3 ESP8266 via USB
3. Download the folder `/abscan_esp8266` and open `abscan_esp8266.ino`. Edit SSID and Password to your WIFI router
4. Replace the "scriptUrl" string with the deployed `presenceHandler.gs` Url
5. Click File > Preferences and paste "http://arduino.esp8266.com/stable/package_esp8266com_index.json" in "additional boards"
6. Tools > Board > Board Manager, type "esp8266" and install it
7. On the selected board, find "Generic Esp8266 Module," select the port, and upload the code
8. Flashing is completed if "Hard Resetting Via RTS Pin" is visible on output monitor

## Deploying Gscripts & Spreadsheets
1. Download the folder `/gscripts` and `/sheet_templates`
2. Upload every `.xlsx` file into https://docs.google.com/spreadsheets/
3. Upload every `.gs` file into https://script.google.com/home
4. Retrieve the Spreadsheet ID from the uploaded `.xlsx` and insert it into each `.gs` file
5. Deploy > New deployment > Select type: Web app > Who has access: anyone > Deploy, for each `.gs` file
6. Copy the link and insert it based on the corresponding `.gs` file name on `scriptDashboard.js` and `scriptManage.js`

## Functions and Documentation
View the PDF via `abscan_documentation.pdf` or click [here](drive.google.com/linkFilePDF)

## Author GitHub Pages
- https://github.com/javendzk
- https://github.com/lilznug
- https://github.com/dhafinhs
