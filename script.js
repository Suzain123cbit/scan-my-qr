
function onScanSuccess(decodedText, decodedResult) {
    document.getElementById('result').innerText = `Scanned Code: ${decodedText}`;
}

function onScanFailure(error) {
    console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
