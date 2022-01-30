import {orderByName} from './formatOrderBy';

const mock = [
  {
    createdAt: new Date('2022-01-15T00:33:56.062Z'),
    name: 'Zwm',
    type: 'water',
    id: '12',
  },
  {
    createdAt: new Date('2022-01-15T00:33:56.062Z'),
    name: 'Flu',
    type: 'water',
    id: '13',
  },
  {
    createdAt: new Date('2022-01-15T00:33:56.062Z'),
    name: 'Aluwm',
    type: 'water',
    id: '15',
  },
];

describe('Function order by', () => {
  it('deve receber um array e orderar em ordem alfabetica a - z', () => {
    const retorno = orderByName(mock);

    expect(retorno).toStrictEqual([
      {
        createdAt: new Date('2022-01-15T00:33:56.062Z'),
        name: 'Aluwm',
        type: 'water',
        id: '15',
      },
      {
        createdAt: new Date('2022-01-15T00:33:56.062Z'),
        name: 'Flu',
        type: 'water',
        id: '13',
      },

      {
        createdAt: new Date('2022-01-15T00:33:56.062Z'),
        name: 'Zwm',
        type: 'water',
        id: '12',
      },
    ]);
  });
});
