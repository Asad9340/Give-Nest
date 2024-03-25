
export const saveLocalStorage = (data) => {
  console.log(data)
  const saveData = JSON.parse(localStorage.getItem('donate')) || [];
  console.log(saveData)
  const existData = saveData.find((item) => item.id === data.id);
  if (!existData) {
    saveData.push(data);
    // console.log(saveData)
    localStorage.setItem('donate', JSON.stringify(saveData));
  }

}

export const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('donate')) || [];
  return data;
}