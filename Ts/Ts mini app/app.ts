//?Type

enum Role {
  ADMIN,
  STUDENT,
}
//?===========================================================

//? Interface

interface IUser {
  id: number;
  name: string;
  role: Role;
}
//?----------------------------------------------------------

interface ICourse{
  id:number,
  title:
}

//?==========================================================

//? Role checking

function isAdmin(user: IUser): user is IUser & { role: Role.ADMIN } {
  return user.role === Role.ADMIN;
}
