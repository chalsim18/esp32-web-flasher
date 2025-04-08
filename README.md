# ESP32 Web Flasher 🌐⚡

A browser-based tool for flashing ESP32 microcontrollers using WebSerial—no installs needed!



## ✨ Features
- **Zero-Install** – Works directly in Chrome/Edge/Firefox  
- **Firmware Flashing** – Upload `.bin` files via WebSerial  
- **Serial Monitor** – Real-time debug output  
- **Multi-File Support** – Flash bootloader/partitions at custom offsets  
- **Progress Tracking** – Visual feedback during operations  
- **ESP32 Family Support** – Works with ESP32, ESP32-S2/S3/C3  

## 🚀 Quick Start
1. **Connect** your ESP32 via USB  
2. **Visit** [flasher.example.com](https://flasher.example.com) *(or run locally)*  
3. **Select** your board from serial ports  
4. **Upload** firmware and click **Flash!**  

## 🛠️ Development Setup
```bash
# Clone repo
git clone https://github.com/yourusername/esp32-web-flasher.git
cd esp32-web-flasher

# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm start

# Production build
npm run build