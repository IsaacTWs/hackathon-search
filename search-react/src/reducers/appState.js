const initial = {selectedEmployeeId:"1", selectedEmployee:{} };

const appState = (state = initial, action, data) => {

    switch (action.type) {
    case 'SELECT_EMPLOYEE': {
        let employee_copy = Object.assign({}, action.employee);
        return Object.assign({}, {selectedEmployeeId: action.employee.id}, {selectedEmployee: employee_copy });
    }    
    case 'SELECT_EVENT': {
        let event_copy = Object.assign({}, action.event);
        return Object.assign({}, {selectedEventId: action.event.id}, {selectedEvent: event_copy });
    } 
    default:
        return state
    }
}

export default appState