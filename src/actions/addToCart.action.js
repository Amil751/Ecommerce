export const myIncAction = (add, item) => {
  const b = add.filter((element) => element.id !== item.id);
  const a = { ...item, count: item.count + 1 };
  b.push(a);
  return { type: "increase", payload: b };
};

export const myDecAction = (add,item) => {
    if (item.count > 1) {
      const b = add.filter((element) => element.id !== item.id);
      const a = { ...item, count: item.count - 1 };
      b.push(a);
      return { type: "decrease", payload: b };
    }else{
        const b = add.filter((element) => element.id !== item.id);
        return { type: "delete", payload: b };
    }
  };