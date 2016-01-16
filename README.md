# array-to-image

Convert an Uint8ClampedArray to an image.

## Installation

```
$ npm install --save array-to-image
```

## Usage

```js
import { getImgFromArr } from 'array-to-image';

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

#### `dataUrl = getDataUrlFromArr(arr, w, h)`

Get a data url string from the given Uint8ClampedArray `arr`.
If `w` and `h` are ommitted, the image is considered to be squared.

#### `img = getImgFromDataUrl(data)`

Get an `image` from the given url string `data`.

#### `img = getImgFromArr(arr, w, h)`

Get an `image` from the given Uint8ClampedArray `arr`.
If `w` and `h` are ommitted, the image is considered to be squared.

## License

MIT, see [LICENSE.md](https://github.com/vaalentin/array-to-image/blob/master/LICENSE.md) for more details.
