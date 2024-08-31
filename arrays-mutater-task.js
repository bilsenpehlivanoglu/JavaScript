const states =["Florida", "San Francisco","New Hampshire", "Boston"];

const loadList = () => {
    let html = ""; 
    for(let i=0; i<states.length; i++){
    html += '<li>${states[i]}</li>'; 
    }
    document.querySelector("#stateList").innerHTML = html;
};
loadList();