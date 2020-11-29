import configure from './config/config'
import Axios from "axios"
const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1/employees";

class employeeService{
    baseUrl = configure.baseUrl;

    addEmployee(data){
        console.log(this.baseUrl);
        return Axios.post(this.baseUrl,data);
    }

}
export default employeeService
