const groceriesList = () => {
  const res = new Map();
  const objetas = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(objetas)) {
    res.set(key, objetas[key]);
  }
  return res;
};

export default groceriesList;
