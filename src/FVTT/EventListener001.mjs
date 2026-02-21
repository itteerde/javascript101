/**
 * this works locally only. This also means, it does not work after reloading. Also, the text added is not modified at the ChatMessage, but only in the locally running DOM, therefore the added text will disappear on reload, too.
 */

let id = crypto.randomUUID();
let content = `
  <div class="messageClickable" id="${id}">
    click here
  </div>
`;

let msg = await ChatMessage.create({ content: content });

console.log({ msg: msg });
console.log({ id: id });

setTimeout(function () {
    let element = document.getElementById(id);
    console.log({ element: element });

    element.addEventListener("click", (event) => {
        event.target.innerText += 'click';
    })
}, 1000);