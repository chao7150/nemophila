const delay = (ms: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, ms));

const inject = async () => {
  const tweetButton = document.getElementsByClassName(
    "js-send-button",
  )[0] as HTMLButtonElement;
  if (tweetButton) {
    tweetButton.onclick = (_e) => {
      console.log("injected");
    };
  } else {
    await delay(3000);
    inject();
  }
};

window.addEventListener("load", inject);
