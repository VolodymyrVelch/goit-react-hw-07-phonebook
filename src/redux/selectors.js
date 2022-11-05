// створюємо селектори для використання в потрібних частинах проекту
//  через useSelector
export const getContacts = state => state.phonebooks.contacts;

export const getFilter = state => state.phonebooks.filter;

export const selectIsLoading = state => state.phonebooks.isLoading;

export const selectError = state => state.phonebooks.error;
