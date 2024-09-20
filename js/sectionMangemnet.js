import querySelector from "./querySelector.js";
import showCurrendSection from "./showCurTarget.js";

export default function sectionManagemant(event) {
  // all sections here
  const cashinForm = querySelector("#cashinform");
  const cashOutForm = querySelector("#cashoutform");
  const transectionHist = querySelector("#transHis");
  // target
  let currentTarget = event.target.innerText;
  switch (currentTarget) {
    case "Add Money":
      showCurrendSection(cashinForm, querySelector("#cashin"));
      break;
    case "CashOut":
      showCurrendSection(cashOutForm, querySelector("#cashout"));
      break;
    case "Transection History":
      showCurrendSection(transectionHist, querySelector("#transectionHis"));
      break;
    default:
      alert("features is not availible");
      break;
  }
}
