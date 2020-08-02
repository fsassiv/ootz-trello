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

  if (registeredUser.length > 0) {
    setCurrentSession({ ...registeredUser[0] });
    return { ...registeredUser[0] };
  }
  return { error: "Usuário não registrato ou Email/Senha inválidos" };
};

export const setCurrentSession = ({ id, name, email, theme }) => {
  const session = JSON.stringify({ id, name, email, theme });

  sessionStorage.setItem("currentSession", session);
};

export const getCurrentSession = () => {
  return JSON.parse(sessionStorage.getItem("currentSession"));
};

export const logOut = () => {
  sessionStorage.removeItem("currentSession");
};

export const updateUserTheme = currentTheme => {
  const userDB = JSON.parse(localStorage.getItem("users"));
  const currentUser = getCurrentSession();

  const updatedUserDB = userDB.map(user => {
    if (user.id === currentUser.id) {
      setCurrentSession({
        id: user.id,
        name: user.name,
        email: user.email,
        theme: currentTheme
      });
      return { ...user, theme: currentTheme };
    }
    return user;
  });

  localStorage.setItem("users", JSON.stringify(updatedUserDB));
};
