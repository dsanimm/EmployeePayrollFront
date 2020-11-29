import configure from './config/config'
import Axios from "axios"
const EMPLOYEE_API_BASE_URL = "http://localhost:8081/employeepayrollservice";

class employeeService{
    baseUrl = configure.baseUrl;

    addEmployee(data){
        console.log(this.baseUrl);
        return Axios.post(EMPLOYEE_API_BASE_URL,data);
    }
    getAllEmployee() {
        return Axios.get(`${this.baseUrl}/get/getall`);
      }
      updateEmployee(data) {
        return Axios.put(`${this.baseUrl}/${data.id}`, data);
      }
    
      getEmployee(id) {
        return Axios.get(`${this.baseUrl}/get/${id}`);
      }
      deleteEmployee(id) {
        return Axios.delete(`${this.baseUrl}/${id}`);
      }
    
}
export default employeeService
