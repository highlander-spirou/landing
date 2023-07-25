import { persistentMap } from "@nanostores/persistent";
import { action } from "nanostores";

const $settings = persistentMap("settings:", {
  theme: "emerald",
});


const switchTheme = action($settings, "switch-theme", (store) => {
  store.get().theme === "emerald"
  ? store.setKey("theme", "night")
  : store.setKey("theme", "emerald");
  console.log(store.get().theme)
  return store.get();
});

export { $settings, switchTheme };
