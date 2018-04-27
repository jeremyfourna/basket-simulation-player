# basket-simulation-player

[![NPM](https://nodei.co/npm/basket-simulation-player.png)](https://www.npmjs.com/package/basket-simulation-player)

## Installation

`npm i basket-simulation-player`

## Usage

```js
const { generatePlayer } = require('basket-simulation-player');

const randomPlayer = generatePlayer();
```

When `generatePlayer` is called, it returns an object like this:

```js
{
  id: 'BS9111AY63OYH811550N',
  name: 'Lacy Pittsley',
  height: 187,
  charact: {
    ft: 64,
    twoPts: 86,
    threePts: 34
  }
}
```