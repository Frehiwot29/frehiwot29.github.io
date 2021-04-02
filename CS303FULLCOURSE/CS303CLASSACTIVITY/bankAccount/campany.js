"use strict";
let company = {
    sales: [{ name: "Adu", salary: 1000 }, { name: "Simon", salary: 600 }],
    development: {
        sites: [{ name: "Kalab", salary: 2000 }, { name: "Aster", salary: 1800 }], //subdepartments
        internals: [{ name: "frehi", salary: 1300 }]
    }
};
const salesPerson = company.sales;
company.name;
company.salary;
console.log(salesPerson);
const sitePerson = company.development.sites;
company.development.internals.name;
company.development.internals.salary;
console.log(sitePerson);
