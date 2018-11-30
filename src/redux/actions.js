export const doTest = () => ({
    type: 'SET_TEST',
    test: 'some text',
});

export const loadAllMessages = (messages) =>({
    tyoe: 'LOAD_MESSAGES',message,
});

export const importMessage = (message) => ({
    type: 'IMPORT_MESSAGE',message,
});