document.addEventListener("DOMContentLoaded", function () {
  const dropArea = document.getElementById("drop-area");
  const fileInput = document.getElementById("input-file");
  const fileList = document.querySelector(".file-list");

  loadFromLocalStorage();

  fileInput.addEventListener("change", fileUpload);

  function fileUpload() {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const imageLink = event.target.result;

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
      accept.addEventListener("click", function () {
        if (description.value.trim() !== "") {
          saveToLocalStorage(file.name, imageLink, description.value);
        } else {
          alert("Please add a description before saving.");
        }
      });
      div.appendChild(accept);

      const reject = document.createElement("img");
      reject.src = "cancel.png";
      reject.alt = "no";
      reject.className = "reject";
      reject.addEventListener("click", function () {
        div.remove();
        fileInput.value = "";
      });
      div.appendChild(reject);

      fileList.appendChild(div);
    };

    reader.readAsDataURL(file);
  }

  dropArea.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    fileInput.files = e.dataTransfer.files;
    fileUpload();
  });

  function saveToLocalStorage(imageName, imageUrl, description) {
    const storedImagesData = JSON.parse(
      localStorage.getItem("storedImagesData") || "[]"
    );

    storedImagesData.push({ imageName, imageUrl, description });

    localStorage.setItem("storedImagesData", JSON.stringify(storedImagesData));

    loadFromLocalStorage();
  }

  function loadFromLocalStorage() {
    const storedImagesData = JSON.parse(
      localStorage.getItem("storedImagesData") || "[]"
    );

    fileList.innerHTML = "";

    storedImagesData.forEach((data) => {
      const div = document.createElement("div");
      div.className = "img-view";

      const imgHolder = document.createElement("div");
      imgHolder.className = "img-holder";
      div.appendChild(imgHolder);

      const image = document.createElement("img");
      image.className = "image";
      image.src = data.imageUrl;
      image.alt = data.imageName;
      imgHolder.appendChild(image);

      const description = document.createElement("input");
      description.type = "text";
      description.className = "description";
      description.placeholder = "Description";
      description.value = data.description;
      description.disabled = true;
      div.appendChild(description);

      const reject = document.createElement("img");
      reject.src = "cancel.png";
      reject.alt = "no";
      reject.className = "reject";
      reject.addEventListener("click", function () {
        removeImage(data.imageUrl);
      });
      div.appendChild(reject);

      fileList.appendChild(div);
    });
  }

  function removeImage(imageUrl) {
    const storedImagesData = JSON.parse(
      localStorage.getItem("storedImagesData") || "[]"
    );

    const indexToRemove = storedImagesData.findIndex(
      (image) => image.imageUrl === imageUrl
    );

    if (indexToRemove !== -1) {
      storedImagesData.splice(indexToRemove, 1);

      localStorage.setItem(
        "storedImagesData",
        JSON.stringify(storedImagesData)
      );

      loadFromLocalStorage();
    }
  }
});
