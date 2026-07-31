import {
  db,
  collection,
  getDocs
} from "./firebase.js";

const testsDiv = document.getElementById("testsList");

async function loadTests() {

    const snapshot = await getDocs(collection(db, "tests"));

    let html = "";

    snapshot.forEach((doc) => {

        const test = doc.data();

        html += `
<label>
<input type="checkbox"
value="${test.name}"
data-price="${test.price}"
onchange="calculateTotal()">

${test.name} — ₹${test.price}

</label><br>
`;

    });

    testsDiv.innerHTML = html;

}

window.loadTests = loadTests;

loadTests();
