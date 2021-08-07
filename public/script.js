// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("Rekkt_ByThe_Best");

// define variables that reference elements on our page
const theStanza = document.getElementById("theStanza");
const times = document.getElementById("theTimes");
const victim = document.getElementById("theVictim");

let sendStanza = async () => {
  await fetch("/stanza", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify([
      theStanza.value,
      times.value != "" ? times.value : 1,
      victim.value
    ])
  }).then(() => {
    // theStanza.value = theStanza.defaultValue;
    times.value = times.defaultValue;
    // victim.value = victim.defaultValue;
  });
};
