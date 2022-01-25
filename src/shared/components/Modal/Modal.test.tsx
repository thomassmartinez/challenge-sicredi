import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Modal} from '.';
import {DragonServices} from 'shared/services/dragons';

const mockModal = {
  open: true,
  type: 'criar',
  getListDrakes: () => jest.fn(),
  openCloseModal: () => jest.fn(),
};

describe('render Modal', () => {
  it('ao clicar no botao criar, deve abrir modal renderizando o Titulo como Criar', () => {
    render(
      <Modal
        open={mockModal.open}
        type={mockModal.type}
        getListDrakes={mockModal.getListDrakes}
        openCloseModal={mockModal.openCloseModal}
      />,
    );
    expect(screen.getByText('criar')).toBeTruthy();
    expect(screen.queryByText('alterar')).not.toBeInTheDocument();
  });

  it('ao clicar no icone de fechar, deve fechar a modal', () => {
    const closeModal = jest.fn();
    const getListDrakesModal = jest.fn();
    render(
      <Modal
        open={mockModal.open}
        type={mockModal.type}
        getListDrakes={getListDrakesModal}
        openCloseModal={closeModal}
      />,
    );

    const iconClose = screen.getByTestId('iconCloseModal');
    fireEvent.click(iconClose);

    expect(closeModal).toBeCalled();
    expect(getListDrakesModal).not.toBeCalled();
  });

  it('ao clicar no botao cancelar, deve fechar a modal', () => {
    const closeModal = jest.fn();
    const getListDrakesModal = jest.fn();

    render(
      <Modal
        open={mockModal.open}
        type={mockModal.type}
        getListDrakes={getListDrakesModal}
        openCloseModal={closeModal}
      />,
    );

    const btnCancel = screen.getByTestId('btnCloseModal');
    fireEvent.click(btnCancel);

    expect(closeModal).toBeCalled();
    expect(getListDrakesModal).not.toBeCalled();
  });

  it('ao preencher os inputs deve enviar para o backend', () => {
    const closeModal = jest.fn();
    const getListDrakes = jest.fn();
    const spy = jest.spyOn(DragonServices, 'postDragon');

    render(
      <Modal
        open={mockModal.open}
        type={mockModal.type}
        getListDrakes={getListDrakes}
        openCloseModal={closeModal}
      />,
    );

    const inputName = screen.getByTestId('inputName');
    fireEvent.change(inputName, {target: {value: 'Dremon'}});
    const inputType = screen.getByTestId('inputType');
    fireEvent.change(inputType, {target: {value: 'fire'}});
    const btnConfirm = screen.getByTestId('btnConfirmModal');

    fireEvent.submit(btnConfirm);

    expect(spy).toHaveBeenCalledWith({
      name: 'Dremon',
      type: 'fire',
    });
  });

  it('ao clicar para alterar o dragao, deve apresentar as inputs preenchidos para alteração', () => {
    const closeModal = jest.fn();
    const getListDrakes = jest.fn();

    const data = {
      createdAt: new Date('2022-01-25T00:33:56.062Z'),
      name: 'Drumomon',
      type: 'water',
      id: '33',
    };

    render(
      <Modal
        open={mockModal.open}
        type={'alterar'}
        data={data}
        getListDrakes={getListDrakes}
        openCloseModal={closeModal}
      />,
    );

    const inputName = screen.getByTestId('inputName');
    const inputType = screen.getByTestId('inputType');

    expect(inputName).toHaveValue('Drumomon');
    expect(inputType).toHaveValue('water');
  });

  it('ao abri a modal na versão alterar, deve poder alterar os inputs e enviar ao backend', () => {
    const closeModal = jest.fn();
    const getListDrakes = jest.fn();
    const spy = jest.spyOn(DragonServices, 'putDragon');
    const data = {
      createdAt: new Date('2022-01-25T00:32:56.062Z'),
      name: 'Dremon',
      type: 'fire',
      id: '31',
    };
    render(
      <Modal
        open={mockModal.open}
        type={'alterar'}
        data={data}
        getListDrakes={getListDrakes}
        openCloseModal={closeModal}
      />,
    );

    const inputName = screen.getByTestId('inputName');
    fireEvent.change(inputName, {target: {value: 'Dremonsss'}});
    const inputType = screen.getByTestId('inputType');
    fireEvent.change(inputType, {target: {value: 'fireaaa'}});
    const btnConfirm = screen.getByTestId('btnConfirmModal');

    fireEvent.submit(btnConfirm);
    expect(spy).toHaveBeenCalledWith('31', {
      name: 'Dremonsss',
      type: 'fireaaa',
      createdAt: new Date('2022-01-25T00:32:56.062Z'),
      id: '31',
    });
  });
});
