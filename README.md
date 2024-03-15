# Sophosia API

> [!WARNING]
> **This API is in its alpha stage, breaking changes is expected in new releases. Use it with caution.**

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

See the repo [Sample Plugin](https://github.com/sophosia/sample-plugin) for more detailed usage. In this repo, you can find the usage of `vite` build, integration with the frontend framework `vue`, and the use of `github action` to automate the release of your plugin.
