# Sophosia API

## Usage

```ts
// main.ts
import type { Plugin } from "sophosia-api";
class MyPlugin extends Plugin {
  async enable() {
    this.addButton(/* button */);
    this.addView(/* view */);
  }
}
```

See the repo [Sample Plugin](https://github.com/sophosia/sample-plugin) for more usage.
