import uniqid from "uniqid";
import bcrypt from "bcryptjs";

export const salt = 10;

export const createNewUser = credentials => {
  const { name, email, password } = credentials;
  const userDB = JSON.parse(localStorage.getItem("users")) || [];

  const newUser = {
    id: uniqid(),
    name: name.replace(/^\w/, c => c.toUpperCase()),
    email,
    password: bcrypt.hashSync(password, salt),
    theme: "light"
  };

  //check for existing email
  if (userDB.filter(user => user.email === email).length > 0) {
    return { error: "Email já em uso" };
  }

  //save newUser in store
  const newUserDB = JSON.stringify([...userDB, newUser]);
  localStorage.setItem("users", newUserDB);
  setCurrentSession({
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    theme: newUser.theme
  });
  return { id: newUser.id, name: newUser.name, email: newUser.email };
};

export const logUser = credentials => {
  const { email, password } = credentials;
  const userDB = JSON.parse(localStorage.getItem("users"));

  const registeredUser = userDB.filter(
    user => user.email === email && bcrypt.compareSync(password, user.password)
  );

  setCurrentSession({ ...registeredUser[0] });
  return registeredUser;
};

export const setCurrentSession = ({ id, name, email, theme }) => {
  const session = JSON.stringify({ id, name, email, theme });

  //set to the localStorage
  sessionStorage.setItem("currentSession", session);
};

export const getCurrentSession = () => {
  return JSON.parse(sessionStorage.getItem("currentSession"));
};

export const logOut = () => {
  sessionStorage.removeItem("currentSession");
};

export const updateUserTheme = id => {
  const userDB = JSON.parse(localStorage.getItem("users"));

  const updatedUserDB = userDB.map(user => {
    if (user.id === id) {
      user.theme === "light" ? (user.theme = "dark") : (user.theme = "light");
    }
  });

  localStorage.setItem("users", updatedUserDB);
};
