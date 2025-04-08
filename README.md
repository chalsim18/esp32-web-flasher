# ESP32 Web Flasher 🌐⚡

A browser-based tool for flashing ESP32 microcontrollers using the WebSerial API. No installs required—works directly in Chrome, Edge, or Firefox!



## ✨ Features
- **Zero-Install** - Runs entirely in your browser
- **Cross-Platform** - Works on Windows, Mac, Linux, ChromeOS
- **Full Flashing Suite**:
  - Flash firmware binaries (.bin)
  - Upload partition tables & bootloaders
  - Custom flash addresses
- **Serial Monitor** - Built-in console for debugging
- **Progress Tracking** - Real-time flash progress with verification
- **ESP32 Family Support**:
  - ESP32
  - ESP32-S2/S3
  - ESP32-C3/C6

## 🚀 Quick Start
1. **Connect** your ESP32 via USB
2. **Visit** [flasher.example.com](https://flasher.example.com) *(replace with your URL)*
3. **Select** your board from the serial port list
4. **Upload** your firmware.bin file
5. **Flash!** (typical process takes 15-30 seconds)

## 🛠️ Advanced Options
```bash
# Flash at specific address (hex):
Address: 0x10000

# Adjust flash speed:
Frequency: 40MHz | 80MHz | 120MHz

# Erase options:
[ ] Full chip erase
[ ] Only affected sectors
