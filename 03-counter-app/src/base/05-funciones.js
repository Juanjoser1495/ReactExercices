const getUser = () => {
  return {
    uid: "ABC123",
    username: "GokuRocks",
  };
};

const getUserSimplified = () => ({
  uid: "ABC123",
  username: "GokuRocks",
});

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

export { getUser, getUsuarioActivo };
