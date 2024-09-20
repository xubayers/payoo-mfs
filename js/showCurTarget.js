import querySelector from "./querySelector.js";

export default function showCurrendSection(sectionId, btnId) {
  // remove ring on clicked btn
  querySelector("#cashin").classList.remove("ring");
  querySelector("#cashout").classList.remove("ring");
  querySelector("#transectionHis").classList.remove("ring");
  // remove ring on clicked btn
  btnId.classList.add("ring");

  // show sections
  querySelector("#cashinform").classList.add("hidden");
  querySelector("#cashoutform").classList.add("hidden");
  querySelector("#transHis").classList.add("hidden");
  //   let addMoneyForm = querySelector("#cashinform");
  //   let addMoneyForm = querySelector("#cashinform");
  //   let addMoneyForm = querySelector("#cashinform");

  //   show clicked page

  sectionId.classList.remove("hidden");
}
