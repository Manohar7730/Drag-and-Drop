document.addEventListener("DOMContentLoaded", function () {
  const dropArea = document.getElementById("drop-area");
  const fileInput = document.getElementById("input-file");
  const fileList = document.querySelector(".file-list");

  fileInput.addEventListener("change", fileUpload);

  function fileUpload() {
    const file = fileInput.files[0];
    if (!file) return;

    console.log(file);

    const imageLink = URL.createObjectURL(file);

    const div = document.createElement("div");
    div.className = "img-view";

    const imgHolder = document.createElement("div");
    imgHolder.className = "img-holder";
    div.appendChild(imgHolder);

    const image = document.createElement("img");
    image.className = "image";
    image.src = imageLink;
    image.alt = file.name;
    imgHolder.appendChild(image);

    const description = document.createElement("input");
    description.type = "text";
    description.className = "description";
    description.placeholder = "Description";
    div.appendChild(description);

    const accept = document.createElement("img");
    accept.src = "check-mark.png";
    accept.alt = "ok";
    accept.className = "accept";
    div.appendChild(accept);

    const reject = document.createElement("img");
    reject.src = "cancel.png";
    reject.alt = "no";
    reject.className = "reject";
    div.appendChild(reject);

    fileList.appendChild(div);
  }

  dropArea.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    fileInput.files = e.dataTransfer.files;
    fileUpload();
  });
});
