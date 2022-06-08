/**
 * @function getDataUrlFromArray
 * @param {Uint8ClampedArray} inputArray
 * @param {int|null} imageWidth
 * @param {int|null} imageHeight
 * @param {string} imageFormat
 * @param {Number} encoderOptions
 * @returns {string}
 */
export function getDataUrlFromArray(
    inputArray,
    imageWidth = null,
    imageHeight = null,
    imageFormat = 'image/png',
    encoderOptions = 1
) {
    if (imageWidth === null|| imageHeight === null) {
        imageWidth = imageHeight = Math.sqrt(inputArray.length / 4);
    }

    const canvas = document.createElement('canvas');
    const canvasContext = canvas.getContext('2d');

    canvas.width = imageWidth;
    canvas.height = imageHeight;

    const imageData = canvasContext.createImageData(imageWidth, imageHeight);
    imageData.data.set(inputArray);
    canvasContext.putImageData(imageData, 0, 0);

    return canvas.toDataURL(imageFormat, encoderOptions);
}

/**
 * @function getImageFromDataUrl
 * @param {string} dataUrl
 * @returns {HTMLImageElement}
 */
export function getImageFromDataUrl(dataUrl) {
    const img = document.createElement('img');
    img.src = dataUrl;
    return img;
}

/**
 * @function getImageFromArray
 * @param {Uint8ClampedArray} inputArray
 * @param {int|null} imageWidth
 * @param {int|null} imageHeight
 * @param {string} imageFormat
 * @param {Number} encoderOptions
 * @returns {HTMLImageElement}
 */
export function getImageFromArray(
    inputArray,
    imageWidth= null,
    imageHeight= null,
    imageFormat = 'image/png',
    encoderOptions = 1
) {
    return getImageFromDataUrl(
        getDataUrlFromArray(
            inputArray,
            imageWidth,
            imageHeight,
            imageFormat,
            encoderOptions
        )
    );
}
