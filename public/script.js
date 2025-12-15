import { sdk } from "https://esm.sh/@farcaster/miniapp-sdk";
import "./Weft-ui.js";

window.addEventListener("load", async () => {
  const isMini = await sdk.isInMiniApp();
  await sdk.actions.ready();
});