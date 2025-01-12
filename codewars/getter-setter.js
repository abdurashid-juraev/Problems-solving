const obj = {
  name: "Ali",
  surname: "Doe",
  get fullname() {
    return `${this.name + " " + this.surname}`;
  },
};
obj.name = "Vali";
console.log(obj.fullname);
