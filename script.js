function calculate() {
  let s1 = parseInt(document.getElementById("sub1").value);
  let s2 = parseInt(document.getElementById("sub2").value);
  let s3 = parseInt(document.getElementById("sub3").value);

  if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    document.getElementById("result").innerText = "Please enter all marks.";
    return;
  }

  let total = s1 + s2 + s3;
  let avg = total / 3;
  let status = avg >= 33 ? "Pass" : "Fail";

  document.getElementById("result").innerText = 
    `Total: ${total}, 
    Average: ${avg.toFixed(2)}, 
    Result: ${status}`;
}
