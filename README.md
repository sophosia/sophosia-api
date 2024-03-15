# Sophosia API

** !!Warning!! This API is in its alpha stage, breaking changes is expected in new releases. Use it with caution **

## Usage

```ts
// main.ts
import { Plugin } from "sophosia";
class MyPlugin extends Plugin {
  async enable() {
    this.addButton(/* button */);
    this.addView(/* view */);
  }
}
```

See the repo [Sample Plugin](https://github.com/sophosia/sample-plugin) for more usage.
