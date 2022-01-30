import {rest} from 'msw';

const BASE_URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1';

export const handlers = [
  rest.get(`${BASE_URL}/dragon`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          createdAt: new Date('2022-01-15T00:33:56.062Z'),
          name: 'Fluwm',
          type: 'water',
          id: '12',
        },
      ]),
    );
  }),
  rest.delete(`${BASE_URL}/dragon/12`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.put(`${BASE_URL}/dragon/12`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`${BASE_URL}/dragon`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
