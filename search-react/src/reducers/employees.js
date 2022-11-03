import RestAPI from '../rest';

const initial = [{ id: 100, name: 'Brian', email: 'brian@a.com' },
{ id: 101, name: 'Scott', email: 'scott@a.com' },
{ id: 102, name: 'Jeff', email: 'jeff@a.com' }];

const employees = (state = initial, action, data) => {
    switch (action.type) {

        case 'ADD_EMPLOYEE': {
            console.log("in reducer employee.ADD_EMPLOYEE");
            let otheremployees = state.filter(
                employee => {
                    if (employee.id === action.employee.id ) {
                        return false;
                    } else {
                        return true;
                    }
                }
            );
            let newstate = [...otheremployees, Object.assign({}, action.employee)]
            console.log("in reducer employee.ADD_EMPLOYEE, newstate: " + JSON.stringify(newstate));
            return newstate;
        }

        case 'DELETE_EMPLOYEE': {
            console.log("in reducer employees.DELETE_EMPLOYEE");
            let otheremployees = state.filter(
                (employee) => {
                    if (employee.id === action.employee.id ) {
                        return false;
                    } else {
                        return true;
                    }
                }
            );
            let newstate = [...otheremployees]
            console.log("in reducer employees.DELETE_EMPLOYEE, newstate: " + JSON.stringify(newstate));
            return newstate;
        }

        case 'APPLY_EMPLOYEES_UPDATE': {
            console.log("in reducer employees.APPLY_EMPLOYEES_UPDATE", action.employees);
            let newstate = [...action.employees];
            return newstate;
        }

        case 'GET_EMPLOYEE': {
            console.log("in reducer employees.GET_EMPLOYEE", state);
            new RestAPI().getEmployee(action.dispatch, action.target);
            return state;
        }        

        case 'GET_EMPLOYEES': {
            console.log("in reducer employees.GET_EMPLOYEES", state);
            new RestAPI().getEmployees(action.dispatch);
            return state;
        }

        default:
            console.log("in reducer employee.default");
            return state
    }
}

export default employees