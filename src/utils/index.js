import nProgress from "nprogress";
window.nProgress = nProgress;
nProgress.configure({
  showSpinner: false,
  trickleSpeed: 80,
});
export async function getAsyncPage(path) {
  nProgress.start();
  const page = await import(path);
  nProgress.done();
  return page;
}
