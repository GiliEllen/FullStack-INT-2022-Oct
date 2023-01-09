interface IDevelopers {
  name: string;
  age: number;
  salary: number;
  profession: string;
}

const developers: IDevelopers[] = [
  {
    name: "Gili",
    age: 24,
    salary: 34000,
    profession: "Full-Stack",
  },
  {
    name: "Shahar",
    age: 23,
    salary: 40000,
    profession: "Full-Stack",
  },
  {
    name: "Tal",
    age: 30,
    salary: 44000,
    profession: "Front-End",
  },
  {
    name: "Bill",
    age: 80,
    salary: 100000,
    profession: "Back-End",
  },
  {
    name: "Amit",
    age: 22,
    salary: 20000,
    profession: "Front-End",
  },
  {
    name: "Katia",
    age: 35,
    salary: 29000,
    profession: "Back-End",
  },
  {
    name: "Omer",
    age: 28,
    salary: 36000,
    profession: "Full-Stack",
  },
  {
    name: "Muhammad",
    age: 25,
    salary: 11000,
    profession: "Full-Stack",
  },
  {
    name: "Ovad",
    age: 37,
    salary: 39000,
    profession: "Back-End",
  },
  {
    name: "Alex",
    age: 20,
    salary: 12000,
    profession: "Front-End",
  },
];

const avgSalaryPerProffesion = (developers: IDevelopers[]) => {
  let avgFullStackSalary = 0;
  let avgFrontEndSalary = 0;
  let avgBackEndSalary = 0;

  let fullStackIndex = 0;
  let frontEndIndex = 0;
  let backEndIndex = 0;

  developers.forEach((element) => {
    if (element.profession === "Full-Stack") {
      avgFullStackSalary += element.salary;
      fullStackIndex++;
    } else if (element.profession === "Front-End") {
      avgFrontEndSalary += element.salary;
      frontEndIndex++;
    } else if (element.profession === "Back-End") {
      avgBackEndSalary += element.salary;
      backEndIndex++;
    }
  });

  avgFullStackSalary = avgFullStackSalary / fullStackIndex;
  avgFrontEndSalary = avgFrontEndSalary / frontEndIndex;
  avgBackEndSalary = avgBackEndSalary / backEndIndex;

  return console.log(
    `the avarge salary of a Full-Stack developer is ${avgFullStackSalary}, the avarge salary of a Front-End developer is ${avgFrontEndSalary} and the avarge salary of a Back-End developer is ${avgBackEndSalary}`
  );
};

avgSalaryPerProffesion(developers);
