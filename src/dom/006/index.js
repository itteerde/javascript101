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
    const data = e.dataTransfer.getData("text/plain");
    //console.log({ target: target, event: e, data: data });
    target.innerHTML += data;
});