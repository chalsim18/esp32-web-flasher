let port;
let writer;

async function connectESP32() {
    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });
        writer = port.writable.getWriter();
        log("Connected to ESP32! Set it in boot mode.");
    } catch (err) {
        log("Connection error: " + err.message);
    }
}

async function flashFirmware() {
    const fileInput = document.getElementById("binFile");
    if (!fileInput.files.length) {
        log("No firmware selected!");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = async function(event) {
        const firmwareData = new Uint8Array(event.target.result);
        log(`Flashing ${file.name} (${firmwareData.length} bytes)...`);

        await sendToESP32(firmwareData);
    };
    reader.readAsArrayBuffer(file);
}

async function sendToESP32(data) {
    if (!writer) {
        log("ESP32 not connected!");
        return;
    }
    
    log("Sending firmware...");
    await writer.write(data);
    log("Firmware sent! Restart ESP32 in boot mode.");
}

function log(message) {
    document.getElementById("log").textContent += message + "\n";
}
