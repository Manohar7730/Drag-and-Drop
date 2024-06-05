1.  Image upload functionality
    i) Users should be able to upload images by dragging and dropping them into the drop zone or by clicking the drop zone to browse and select files from their device.
    ii) The drop zone should respond to drag over, drag leave, and drop events with respective visual feedback.
    iii) Users should be able to upload a maximum of 5 images, and an alert should be displayed when trying to upload more.
    iv) The file upload should validate that selected files are images and below 1 MB in size.
    v) You should make a div of dropzone, the “class” and “id” of the dropzone should be “dropzone”. Take “class” and “id” both otherwise your code will not get tested correctly.
    vi) The place where you will take the input should have input “type” as “file” and “id” as “fileInput”.

2) Image display and description
   i) Upon uploading, each image should be displayed as a thumbnail in a file list below the drop zone.
   ii) Users should be able to add descriptions to each uploaded image through a textarea element.
   iii) Next to each thumbnail and description, a check icon and a delete icon should be present.
   iv) On clicking the check icon an alert box should pop up saying that description has been added. Once a checkbox has been clicked user should not be able to change the description
   v) On clicking the delete icon the respective image should be deleted from the list.
   vi) The place where your images will append should have the “class” as “file-list” and “id” as “fileList”.

3) Local storage
   i) The app should utilize local storage to save and load image data and descriptions across sessions.
   ii) The image data and descriptions should be saved to local storage every time a new image is uploaded, a description is added/changed, or an image is deleted.
   iii) Previously uploaded images and their descriptions should be displayed in the file list when the page is reloaded.
