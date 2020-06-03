using EmployeeAPIService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeAPIService.Controllers
{
    public class EmployeeController : ApiController
    {
        public IEnumerable<Employee> GetEmployees() {
            using (EmployeeServiceEntities entities = new EmployeeServiceEntities()) 
            {
                return entities.Employees.ToList();
            }
        }

        public Employee GetEmployee(string code) {
            using (EmployeeServiceEntities entities = new EmployeeServiceEntities()) 
            {
                return entities.Employees.FirstOrDefault(e => e.code == code);
            }
        }
    }
}
