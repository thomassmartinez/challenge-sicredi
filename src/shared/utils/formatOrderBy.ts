import {IDragon} from 'shared/services/dragons';

export const orderByName = (item: IDragon[]) => {
  const newItem = item.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
  );
  return newItem;
};
