
export async function makeTools() {
    let object = await fetch('./tools.json')
    object = await object.text();
    object = JSON.parse(object);
    let tools = document.getElementsByClassName('tools')[0]
    let html = "";
    for (var i = 0; i < object.tools.length; ++i) {
        html += `<div class="toolcard">
            <div class="toolimage">
                <img src="${object.tools[i].imageurl}" />
            </div>
        </div>`;
        if (i % 5 == 4) {
            let container =
                `<div class="row">
                ${html}
            </div>`;
            html = "";
            tools.innerHTML += container;
        }
    }
    let container =
        `<div class="row">
            ${html}
        </div>`;
    html = "";
    tools.innerHTML += container;
}