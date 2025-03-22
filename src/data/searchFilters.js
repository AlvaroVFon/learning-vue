const getUsersFilters = () => {
  return [
    { label: 'Email', value: 'email' },
    { label: 'Username', value: 'username' },
    { label: 'McId', value: 'mcid', selected: true },
  ]
}

const getClientsFilters = () => {
  return [
    { label: 'Auth', value: 'auth' },
    { label: 'Api', value: 'api' },
    { label: 'Reader', value: 'reader', selected: true },
  ]
}

export { getUsersFilters, getClientsFilters }
