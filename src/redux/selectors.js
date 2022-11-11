// створюємо селектори для використання в потрібних частинах проекту через useSelector

export const selectContacts = state => state.phonebooks.contacts;

export const selectIsLoading = state => state.phonebooks.isLoading;

export const selectError = state => state.phonebooks.error;

export const selectFilter = state => state.filter.data;
