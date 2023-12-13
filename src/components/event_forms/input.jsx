import { useState } from "react";
import Axios from "axios";
import "./form.css";

function Input() {
  // const [teamName, setTeamName] = useState("");
  // const [teamCaptain, setTeamCaptain] = useState("");
  // const [regNo1, setRegNo1] = useState("");
  // const [teamMate2, setTeamMate2] = useState("");
  // const [regNo2, setRegNo2] = useState("");
  // const [teamMate3, setTeamMate3] = useState("");
  // const [regNo3, setRegNo3] = useState("");
  // const [teamMate4, setTeamMate4] = useState("");
  // const [regNo4, setRegNo4] = useState("");
  // const [sub, setSub] = useState("");
  // const [regNo5, setRegNo5] = useState("");
  // const [captainIgName, setCaptainIgName] = useState("");
  // const [TxId, setTxId] = useState("");

  // async function registerBgmiUser(event) {
  //   event.preventDefault();
  //   const res = await Axios.post(
  //     "https://forge-backend-service.onrender.com/bgmi",
  //     {
  //       teamName: teamName,
  //       teamCaptain: teamCaptain,
  //       regNo1: regNo1,
  //       teamMate2: teamMate2,
  //       regNo2: regNo2,
  //       teamMate3: teamMate3,
  //       regNo3: regNo3,
  //       teamMate4: teamMate4,
  //       regNo4: regNo4,
  //       sub: sub,
  //       regNo5: regNo5,
  //       captainIgName: captainIgName,
  //       TxId: TxId,
  //     },
  //     {
  //       header: {
  //         "content-type": "application/json",
  //       },
  //     }
  //   ).then(() => (window.location.href = "/succuss"));
  // }

  return (
    <div >
{/*     <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="style.css"> */}

    <h1>TESTING AREA</h1>

<table>
  <tbody>

    <tr>
      <td>
        <p>INPUT</p>
      </td>
      <td>
        <input id="input1">
        <input id="input2">
        <input id="input3">
      </td>
    </tr>

    <tr>
      <td>
        <p>OUTPUT
          <p>
      </td>
      <td>
        <p id="output"></p>
      </td>
    </tr>

    <tr>
      <td>
        <p>LOG</p>
      </td>
      <td>
        <p id="log"></p>
    </tr>

    <tr>
      <td>
        <button onclick="clearLog()">Clear the log</button>
      </td>
      <td>
        <button onclick="launch()">Execute launch()</button>
      </td>
    </tr>

    <tr>
      <td>
        <p>QUICK NOTES</p>
      </td>
      <td>
        <p class="noteType">IDs</p>
        <p>Input text box : "input"</p>
        <p>Output text : "output"</p>
        <p>Log text : "log"</p>
        <p class="noteType">FUNCTIONS</p>
        <p>On button press : "launch()"</p>
        <p>Access the debug : debug(x)</p>
        <p>Clear the log : clearLog()</p>
      </td>
    </tr>

  </tbody>
</table>

    </div>
  );
}

export default Input;
