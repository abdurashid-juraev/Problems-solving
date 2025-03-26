const inputs = document.querySelectorAll("input");
const editBtn = document.querySelector(".edit");
const addBtn = document.querySelector(".add");
const tbody = document.querySelector("tbody");

function fn(name, age, gender, email) {
  tbody.innerHTML = `
        <tr>
          <td><input type="text" />${name}</td>
          <td><input type="number" />${age}</td>
          <td><input type="text" />${gender}</td>
          <td><input type="text" />${email}</td>
          <td>
            <div>
           
               <button class="edit">edit</button> 
               <button>delete</button> 
            </div>
          </td>
        </tr>
`;
  return tbody;
}
addBtn.addEventListener("click", () => {
  fn("sa", 11, "ass", "ass");
});
