export const checkValidData = (email, password, fullname) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const IsPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
    password
  );
  const IsFullNameValid =
    /^([A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      fullname
    );
  if (!isEmailValid) return "Email ID is not valid";
  if (!IsPasswordValid) return "Password is not valid";
  if (!IsFullNameValid) return "Name is not valid";
  return null;
};
