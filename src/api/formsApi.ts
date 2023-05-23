const forms = [
  {
    id: 1,
    name: "Form nr 1",
    referenceId: "1-175-882-0511",
    created: "2021-03-19 10:17",
    deadline: "2021-03-19 10:17",
    modifiedBy: "Jane Cooper",
    modificationDate: "2021-03-19 10:17",
    status: "Approved",
    result: "OK",
    requiredAction: "",
  },
  {
    id: 2,
    name: "Form nr 2",
    referenceId: "1-175-882-0511",
    created: "2021-03-19 10:17",
    deadline: "2021-03-19 10:17",
    modifiedBy: "Jane Cooper",
    modificationDate: "2021-03-19 10:17",
    status: "In Progress",
    result: "NOT-OK",
    requiredAction: "Quality",
  },
  {
    id: 3,
    name: "Form nr 3",
    referenceId: "1-175-882-0511",
    created: "2021-03-19 10:17",
    deadline: "2021-03-19 10:17",
    modifiedBy: "Jane Cooper",
    modificationDate: "2021-03-19 10:17",
    status: "In Progress",
    result: "NOT-OK",
    requiredAction: "Operator",
  },
  {
    id: 4,
    name: "Form nr 4",
    referenceId: "1-175-882-0511",
    created: "2021-03-19 10:17",
    deadline: "2021-03-19 10:17",
    modifiedBy: "Jane Cooper",
    modificationDate: "2021-03-19 10:17",
    status: "Created",
    result: "NOT-OK",
    requiredAction: "Quality,Operator,Other1,Other2",
  },
  {
    id: 5,
    name: "Form nr 5",
    referenceId: "1-175-882-0511",
    created: "2021-03-19 10:17",
    deadline: "2021-03-19 10:17",
    modifiedBy: "Jane Cooper",
    modificationDate: "2021-03-19 10:17",
    status: "Created",
    result: "NOT-OK",
    requiredAction: "Operator",
  },
  {
    id: 6,
    name: "Form nr 6",
    referenceId: "1-175-882-0511",
    created: "2021-03-19 10:17",
    deadline: "2021-03-19 10:17",
    modifiedBy: "Jane Cooper",
    modificationDate: "2021-03-19 10:17",
    status: "Created",
    result: "NOT-OK",
    requiredAction: "Operator",
  },
];

const getForms = (): Promise<object> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(forms), 300);
  });
};

export default { getForms };
