'use strict';

function getEmployees(list) {
  const listCopy = [...list];
  const employees = [];
  const manArrayOfObject = [];

  for (let index = 0; index < listCopy.length; index++) {
    const listElement = listCopy[index]; // możliwa referencja
    const person = [];

    for (let i = 0; i < listElement.attributes.length; i++) {
      const attribute = listElement.attributes[i].textContent;

      person.push(attribute);
    }

    person.push(listElement.innerText);
    employees.push(person);
  }

  employees.forEach((value) => {
    const human = {
      name: value[3],
      position: value[0],
      salary: value[1],
      age: value[2],
    };

    manArrayOfObject.push(human);
  });

  return manArrayOfObject;
}

function sortList(list) {
  const listToEdit = list;

  listToEdit.sort((a, b) => {
    const aSalary = sortList.getSalary(a);
    const bSalary = sortList.getSalary(b);

    return bSalary - aSalary;
  });
}

sortList.getSalary = function (obj) {
  const salary = +obj.salary.slice(1).split(',').join('.');

  return salary;
};

const pageList = document.querySelectorAll('body ul li');
const people = getEmployees(pageList);

sortList(people);
