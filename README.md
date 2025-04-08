ESP32 Web Flasher

This project provides a web-based interface for flashing ESP32 microcontrollers directly from your browser. It eliminates the need for traditional flashing tools by using WebSerial API to communicate with the ESP32.

Features
  Web-based interface accessible from any modern browser
  No additional software installation required
  Supports flashing ESP32 with:
    Firmware binaries (.bin files)
    Partition tables
    Bootloaders
  Progress tracking during flash operations
  Serial monitor for debugging
  Works with most ESP32 variants (ESP32, ESP32-S2, ESP32-S3, ESP32-C3)

Requirements
  Modern browser with WebSerial support (Chrome/Edge 89+, Firefox 101+)
  ESP32 board with USB connectivity
  Firmware binary file to flash

Usage
  Connect your ESP32 to your computer via USB
  Open the ESP32 Web Flasher in your browser
  Click "Connect" and select your ESP32 from the serial port list
  Select the firmware file you want to flash
  Configure flash options (address, speed, etc.) if needed
  Click "Flash" to start the process
  Wait for completion and reset your ESP32

