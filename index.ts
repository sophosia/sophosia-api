export enum Component {
  Ribbon = "Ribbon",
  LeftMenu = "LeftMenu",
  PDFMenu = "PDFMenu",
  PluginPage = "PluginPage",
}

export interface Button {
  id: string;
  icon: string;
  tooltip: string;
  component: Component;
  click: () => void;
}

export interface View {
  id: string;
  component: Component;
  mount: (container: HTMLElement) => void;
}

export enum PageType {
  LibraryPage = "LibraryPage",
  ReaderPage = "ReaderPage",
  NotePage = "NotePage",
  ExcalidrawPage = "ExcalidrawPage",
  HelpPage = "HelpPage",
  SettingsPage = "SettingsPage",
  PluginPage = "PluginPage",
}

export interface Page {
  id: string;
  type: PageType;
  label: string;
}

export class Plugin {
  /**
   * Layout controls
   */
  /**
   * Toggle LeftMenu
   * If visible is given, set the state as it is
   * @param visible
   */
  toggleLeftMenu(visible?: boolean): void {}
  /**
   * Set the view to be shown in LeftMenu
   * @param viewId - the id of the view to be shown
   */
  setLeftMenuView(viewId: string): void {}
  /**
   * Opens a page
   * @param - the page to be opened
   */
  openPage(page: Page): void {}
  /**
   * Add a button
   * @param button - button to be added
   */
  addButton(button: Button): void {}
  /**
   * Add a view
   * @param view - must implement the mount function
   */
  addView(view: View): void {}
  /**
   * This function will be executed when plugin is enabled
   */
  async enable(): Promise<void> {}
  /**
   * This function will be executed when plugin is disabled
   */
  async disable(): Promise<void> {}
  /**
   * Loads data.json in the plugin folder
   */
  async loadData(): Promise<void> {}
  /**
   * Save data to data.json in the plugin folder
   * @param data - must be serializable
   */
  async saveData(data: any): Promise<void> {}
}
