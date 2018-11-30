const initialState = {
    test: 'test value',
    messages: ['diudiuni'],
};

const testReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'LOAD_MESSAGES':
            return Object.assign({},state,{
                messages: action.messages,
            });
        case 'IMPORT_MESSAGES':
            const newMessages = state.messages;
            newMessages.unshift(action.messages)

            return Object.assign({},state,{
                messages: newMessages,
            }) ;
        case 'SET_TEST':
            return Object.assign({}, state, {
                test: action.test
            });
        default:
            return state;
    }
};

export default testReducer;