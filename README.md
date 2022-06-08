# array-to-image

Convert an Uint8ClampedArray to an image.

## Installation

```
$ npm install --save array-to-image
```

## Usage

```js
import {getImageFromArray} from 'array-to-image';

const data = new Uint8ClampedArray(256 * 256 * 4);

for (let i = 0; i < data.length; i += 4) {
    data[i] = 255; // r
    data[i + 1] = 0; // g
    data[i + 2] = 0; // b
    data[i + 3] = 255; // a
}

const img = getImageFromArray(data);
```

## API

#### getDataUrlFromArray

Get a data url string from the given input array, specifying the desired image format and quality.

```js
dataUrl = getDataUrlFromArray(inputArray, imageWidth, imageHeight, 'image/jpeg', 0.8)
```

> Notes:
> - If `imageWidth` and `imageHeight` are omitted, the image is considered to be squared.
> - The `imageFormat` and `encoderOptions` default to `image/png` and `1`, respectively.

#### getImageFromDataUrl

Get an image from the given url string.

```js
img = getImageFromDataUrl(dataUrl)
```

#### getImageFromArray

Get an image from the given input array, specifying the desired image format and quality.

```js
img = getImageFromArray(inputArray, imageWidth, imageHeight, 'image/jpeg', 0.8)
```

> Notes:
> - If `imageWidth` and `imageHeight` are ommitted, the image is considered to be squared.
> - The `imageFormat` and `encoderOptions` default to `image/png` and `1`, respectively.

## License

MIT, see [LICENSE.md](https://github.com/vaalentin/array-to-image/blob/master/LICENSE.md) for more details.
