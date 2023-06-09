import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://640adddf81d8a32198d29845.mockapi.io/api/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContacts = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
