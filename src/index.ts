// import classes
import Cli from "./classes/Cli.js";
import inquirer from "inquirer";
import pg from 'pg'
import { pool } from './connection.js'


// start the cli

inquirer
  .prompt([
    {
      type: 'list',
      name: 'OpeningSelection',
      choices: ['All departments',
        'All roles',
        'All employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role'],
    },
  ])
  .then((answers) => {
    // check if the user wants to create a new vehicle or select an existing vehicle
    switch (answers.OpeningSelection) {
      case 'All departments':
        // WHEN I choose to view all departments
        // THEN I am presented with a formatted table showing department names and department ids

         const results = pool.query('SELECT first_name, last_name FROM employee')
          console.log(results);

        break;
      case 'All roles':
        // WHEN I choose to view all roles
        // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
        break;
      case 'All employees':
        // WHEN I choose to view all employees
        // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        viewAllEmployees();
        break;
      case 'Add a department':
        //           WHEN I choose to add a department
        // THEN I am prompted to enter the name of the department and that department is added to the database
        break;
      case 'Add a role':
        // WHEN I choose to add a role
        // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
        break;
      case 'Add a role':
        //           WHEN I choose to add an employee
        // THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
        break;
      case 'Update an employee role':
        // WHEN I choose to update an employee role
        // THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
        // query
        break;
      default:
      // code block
    }
  });


  async function viewAllEmployees(){
    const client = await pool.connect();
    const result = client.query('SELECT FROM first_name, last_name FROM employee');
    console.log("result: ");
    console.log(result);

  }


