# array-to-image

Convert an Uint8ClampedArray to an image.

## Installation

```
$ npm i -S @vaalentin/array-to-image
```

## Usage

```js
import { getImgFromArr } from '@vaalentin/array-to-image';

const data = new Uint8ClampedArray(256 * 256 * 4);

for(let i = 0; i < data.length; i += 4) {
  data[i] = 255; // r
  data[i + 1] = 0; // g
  data[i + 2] = 0; // b
  data[i + 3] = 255; // a
}

const img = getImgFromArr(data);
```

## API

#### `getDataUrlFromArr(arr, w, h)`

Get a data url string from the given Uint8ClampedArray `arr`.
If `w` and `h` are ommitted, the image is considered to be squared.

#### `getImgFromDataUrl(data)`

Get a HTMLImageElement from the given url string `data`.

#### `getImgFromArr(arr, w, h)`

Get a HTMLImageElement from the given Uint8ClampedArray `arr`.
If `w` and `h` are ommitted, the image is considered to be squared.

## License

MIT
