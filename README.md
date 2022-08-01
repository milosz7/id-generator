## Random id generator

#### Usage:

```javascript
const randomId = require('@milosz7/id-generator')

const id = randomId(5);
// 2@AxY
```
The randomId function can take arguments in range from 5 to 10. Passing a number outside that range will result in defaulting the input to the min/max value.