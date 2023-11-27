function convertRGBToHex(){
    const rgbInput = document.getElementById('rgbInput').ariaValueMax.trim();

    const rgbRegex = /^(\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})$/;
    const match = rgbInput.match(rgbRegex);

    if (!match) {
        console.log('Invalid RGB color format');
        return;
    }
    const R = parseInt(match[1], 10);
    const G = parseInt(match[2], 10);
    const B = parseInt(match[3], 10);

    if (R < 0 || R > 255 || G < 0 || G > 255 || B < 0 || B > 255){
        console.log('RGB values should be between 0 and 255');
        return;
    }
    const hexValue = `#${(1 << 24 | R << 16 | G << 8 | B).toString(16).slice(1)}`;
    document.getElementById('hexValue').textContent = hexValue;
}