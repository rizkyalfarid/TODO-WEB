import fungsiCek from './checkFucn.js';
import fungsiDelete from './deleteFucn.js';
import resetForm from './resetForm.js';

function makeList() {
  const inputList = document.getElementById('inputList')
  const listContainer = document.getElementById('list-container')
  const newList = document.createElement('li');

  if(inputList.value === '') {
    alert('Input Masih kosong');
  } else {
    const namelist = document.createElement('div');
    namelist.setAttribute('class',    'namelist');
    namelist.textContent = inputList.value;
   
    const deleteButton = document.createElement('div');
    deleteButton.setAttribute('class', 'delete');
    deleteButton.setAttribute('id', 'delete');

    deleteButton.innerHTML = ` <i class="fa-regular fa-circle-xmark icon" style="color: #c10b0b;"></i>`;
  
    const completedButton = document.createElement('div');
    completedButton.setAttribute('class', 'complete');
    completedButton.setAttribute('id', 'complete');

    completedButton.innerHTML = `<i class="fa-regular fa-circle-check icon" style="color: #15803d;"></i>`;
  
    newList.append(namelist, deleteButton, completedButton)
    listContainer.append(newList);

    resetForm(inputList)

    const tidakada = document.getElementById('tidakada');
    if (tidakada) {
      tidakada.style.display = 'none';
    } 
    const checklist = document.querySelectorAll('.complete');
    checklist.forEach( checklistButton => {
      checklistButton.addEventListener('click', fungsiCek);
    })

    const hapusTombol = document.querySelectorAll('.delete');
    hapusTombol.forEach( hapus => {
      hapus.addEventListener('click', fungsiDelete);
    })
  }
}

export default makeList;