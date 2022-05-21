async function startvideo() {
  let stream = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {},
    });
  } catch (err) {
    console.error(err);
  }
  document.getElementById("video").srcObject = stream;
}
startvideo();
