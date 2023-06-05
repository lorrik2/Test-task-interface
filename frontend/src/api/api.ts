import { Address } from '../features/types/Address';

const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
const token = '52a4d2d074da18b8a8b4145a17849a2e82892fef';

export const getAddresses = (query: string): Promise<Address[]> => {
  const options: RequestInit = {
    method: 'POST',
    mode: 'cors' as RequestMode,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token,
    },
    body: JSON.stringify({ query: query }),
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((result) => result.suggestions)
    .catch((error) => console.log('error', error));
};
