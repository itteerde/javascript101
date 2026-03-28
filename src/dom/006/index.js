const source = document.querySelector("#draggable");
const target = document.querySelector("#drop-target");

function dragstartHandler(e) {
    // Add different types of drag data
    e.dataTransfer.setData("text/plain", e.target.innerText);
    e.dataTransfer.setData("text/html", e.target.outerHTML);
    e.dataTransfer.setData(
        "text/uri-list",
        e.target.ownerDocument.location.href,
    );
}

source.addEventListener("dragstart", dragstartHandler);

target.addEventListener("dragover", (e) => {
    //console.log({ target: target, event: e });
    e.preventDefault();
});

target.addEventListener("drop", (e) => {
    e.preventDefault();

    const dt = e.dataTransfer;

    // 1. Handle Image Files (dropped from desktop/folders)
    if (dt.files && dt.files.length > 0) {
        const file = dt.files[0];

        if (file.type.startsWith("image/")) {
            console.log('taking file.type path');
            const reader = new FileReader();
            reader.onload = (event) => {
                target.style.backgroundImage = `url('${event.target.result}')`;
                target.style.backgroundSize = "cover";
                target.style.backgroundPosition = "center";
            };
            reader.readAsDataURL(file);
            return; // Exit once handled
        }
    }

    // 2. Handle Image URLs (dropped from another website)
    const imageUrl = dt.getData("text/uri-list");
    if (imageUrl !== document.URL) {
        console.log('taking imageUrl path');
        target.style.backgroundImage = `url('${imageUrl}')`;
        target.style.backgroundSize = "cover";
        target.style.backgroundPosition = "center";
        return;
    }

    // 3. Handle Plain Text (fallback)
    const data = dt.getData("text/plain");
    if (data) {
        console.log('taking text/plain path');
        target.innerHTML += data;
    }
});