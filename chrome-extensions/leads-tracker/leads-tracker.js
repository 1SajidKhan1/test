let myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];

const inputUrl = document.querySelector("#input-url");
const displayUrl = document.querySelector("#display-url");
const saveInputBtn = document.querySelector("#save-input-btn");
const saveTabBtn = document.querySelector("#save-tab-btn");
const deleteAllBtn = document.querySelector("#delete-all-btn");

saveInputBtn.addEventListener("click", saveInput);
saveTabBtn.addEventListener("click", saveTab);
deleteAllBtn.addEventListener("dblclick", deleteAll);

renderLeads();

function saveInput() {
    if (inputUrl.value === "") {
        alert("Please enter a URL");
    } else {
        myLeads.push(inputUrl.value);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        console.log()
        renderLeads();
        inputUrl.value = "";
    }
}

console.log("Hello");

function saveTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let activeTab = tabs[0];
        let activeTabUrl = activeTab.url;
        displayUrl.innerHTML += "<li><a href=" + activeTabUrl + " target='_blank'> " + activeTabUrl + "</a></li>";
    });
}

function deleteAll() {
    localStorage.removeItem("myLeads");
    myLeads = [];
    displayUrl.innerHTML = "";
}

function renderLeads() {

    let listItems = "";
    console.log(myLeads);

    for (let i=0; i<myLeads.length; i++) {
        listItems += `
            <li>
                <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
            </li>
        `
    }
    displayUrl.innerHTML = listItems;
}