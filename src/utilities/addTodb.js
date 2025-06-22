export const getStoredReadList = () => {
  const storedListstr = localStorage.getItem("read-list");
  if (storedListstr) {
    return JSON.parse(storedListstr);
  } else {
    return [];
  }
};
export const getStoreWishList = () => {
  const storedListstr = localStorage.getItem("read-list");
  if (storedListstr) {
    return JSON.parse(storedListstr);
  } else {
    return [];
  }
};
const addToReadList = (id) => {
  const storedReadList = getStoredReadList();
  if (storedReadList.includes(id)) {
  } else {
    storedReadList.push(id);
  }
  const storedListstring = JSON.stringify(storedReadList);
  localStorage.setItem("read-list", storedListstring);
};
const addToWishList = (id) => {
  const storedReadList = getStoredReadList();
  if (storedReadList.includes(id)) {
  } else {
    storedReadList.push(id);
  }
  const storedListstring = JSON.stringify(storedReadList);
  localStorage.setItem("read-list", storedListstring);
};
export { addToReadList, addToWishList };
