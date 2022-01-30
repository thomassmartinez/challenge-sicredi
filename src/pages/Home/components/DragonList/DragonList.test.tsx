import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {DragonList} from '.';
import {DragonServices} from 'shared/services/dragons';

describe('Dragon list', () => {
  it('ao carregar a home deve apresentar a lista de dragoes', async () => {
    render(<DragonList />);

    await waitFor(() => {
      expect(screen.getByText('Fluwm')).toBeTruthy();
    });
    await waitFor(() => {
      expect(screen.getByText('water')).toBeTruthy();
    });
    await waitFor(() => {
      expect(screen.getByText('14/01/2022 21:33')).toBeTruthy();
    });
  });

  it('ao clicar no botao excluir deve remover da lista e atualizar a lista', async () => {
    const deleteDragonSpy = jest.spyOn(DragonServices, 'deleteDragon');

    render(<DragonList />);

    const item = await screen.findByTestId('btnDelete');

    fireEvent.click(item);

    expect(deleteDragonSpy).toHaveBeenCalledWith('12');
  });
});
