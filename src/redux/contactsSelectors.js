const digitsRegExp = /^\d+$/;

export const getVisibleContacts = (allContacts = [], filter = '') => {
  const normalizedFilter = filter.toLowerCase();
  const hasNumbers = digitsRegExp.test(normalizedFilter);

  return hasNumbers
    ? allContacts?.filter(({ phone }) =>
        phone.toLowerCase().includes(normalizedFilter)
      )
    : allContacts?.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
};

export const getContactsFilter = state => state.filter;
