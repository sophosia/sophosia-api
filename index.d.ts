declare enum Component {
    Ribbon = "Ribbon",
    LeftMenu = "LeftMenu",
    PDFMenu = "PDFMenu",
    PluginPage = "PluginPage"
}
interface Button {
    id: string;
    icon: string;
    tooltip: string;
    component: Component;
    click: () => void;
}
interface View {
    id: string;
    component: Component;
    mount: (container: HTMLElement) => void;
}
declare enum PageType {
    LibraryPage = "LibraryPage",
    ReaderPage = "ReaderPage",
    NotePage = "NotePage",
    ExcalidrawPage = "ExcalidrawPage",
    HelpPage = "HelpPage",
    SettingsPage = "SettingsPage",
    PluginPage = "PluginPage"
}
interface Page {
    id: string;
    type: PageType;
    label: string;
}
declare class Plugin {
    /**
     * Layout controls
     */
    /**
     * Toggle LeftMenu
     * If visible is given, set the state as it is
     * @param visible
     */
    toggleLeftMenu: (visible?: boolean) => {};
    /**
     * Set the view to be shown in LeftMenu
     * @param viewId - the id of the view to be shown
     */
    setLeftMenuView: (viewId: string) => {};
    /**
     * Opens a page
     * @param - the page to be opened
     */
    openPage: (page: Page) => {};
    /**
     * Add a button
     * @param button - button to be added
     */
    addButton(button: Button): void;
    /**
     * Add a view
     * @param view - must implement the mount function
     */
    addView(view: View): void;
    /**
     * This function will be executed when plugin is enabled
     */
    enable(): Promise<void>;
    /**
     * This function will be executed when plugin is disabled
     */
    disable(): Promise<void>;
    /**
     * Loads data.json in the plugin folder
     */
    loadData(): Promise<void>;
    /**
     * Save data to data.json in the plugin folder
     * @param data - must be serializable
     */
    saveData(data: any): Promise<void>;
}

export { type Button, Component, type Page, PageType, Plugin, type View };
