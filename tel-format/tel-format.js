let telEl = document.querySelector("#phoneNum");

telEl.addEventListener("keyup", (e) => {
  let val = e.target.value;

  val = val.replace(/\D/g, "");

  if (val.startsWith("998")) {
    val = val.slice(0, 12);
  } else {
    val = "998" + val.slice(0, 9);
  }

  // Format: +998 91 123 45 67
  let formatted = "+998";
  if (val.length > 3) formatted += " " + val.slice(3, 5);
  if (val.length > 5) formatted += " " + val.slice(5, 8);
  if (val.length > 8) formatted += " " + val.slice(8, 10);
  if (val.length > 10) formatted += " " + val.slice(10, 12);

  e.target.value = formatted;
});
