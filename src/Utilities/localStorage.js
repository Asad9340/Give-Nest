export const saveLocalStorage = (data) => {
  const saveData = JSON.parse(localStorage.getItem('donate')) || [];
  const existData = saveData.find((item) => item.id === data.id);
  if (!existData) {
    saveData.push(data);
    localStorage.setItem('donate', JSON.stringify(saveData));
    alert('donation added successfully');
  }
  else {
    alert('already ache re vai ar koto donate korbi');
  }
}