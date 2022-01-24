import React, {useCallback, useEffect, useState} from 'react';
import {DragonServices, IDragon} from 'shared/services/dragons';

import {
  Container,
  Content,
  Section,
  Header,
  Divider,
  H1,
  IconClose,
  Button,
  ContainerButton,
  ContainerInput,
  Form,
  Input,
} from './styles';

interface IPropsModal {
  open: boolean;
  data?: IDragon;
  type: string;
  openCloseModal(): void;
  getListDrakes(): void;
}

export const Modal: React.FC<IPropsModal> = ({
  open,
  data,
  type,
  openCloseModal,
  getListDrakes,
}) => {
  const [drakeUpdate, setDrakeUpdate] = useState<IDragon>({} as IDragon);
  const [drake, setDrake] = useState<Omit<IDragon, 'id'>>(
    {} as Omit<IDragon, 'id'>,
  );

  useEffect(() => {
    setDrake({name: '', type: ''} as IDragon);
    setDrakeUpdate({} as IDragon);
    if (type === 'alterar' && data) {
      setDrakeUpdate(data);
    }
  }, [type, data, setDrake, setDrakeUpdate]);

  const changeDrake = useCallback(
    (e: React.FormEvent, value, item) => {
      drakeUpdate && setDrakeUpdate({...drakeUpdate, [value]: item});
    },

    [drakeUpdate],
  );

  const createDrake = useCallback(
    (e: React.FormEvent, value, item) => {
      setDrake({...drake, [value]: item});
    },
    [drake],
  );

  const submitNewDrake = useCallback(
    async (e, newDrake) => {
      e.preventDefault();
      try {
        await DragonServices.postDragon(newDrake);
      } catch (error) {
        alert('Error ao cadastrar dragão');
      } finally {
        getListDrakes();
        openCloseModal();
      }
    },
    [getListDrakes, openCloseModal],
  );

  const submitUpdateDrake = useCallback(
    async (e, newDrake) => {
      e.preventDefault();
      try {
        await DragonServices.putDragon(newDrake.id, newDrake);
      } catch (error) {
        alert('Error ao alterar dragão');
      } finally {
        getListDrakes();
        openCloseModal();
      }
    },
    [getListDrakes, openCloseModal],
  );

  const handleFormModal = useCallback(
    (type: string) => {
      return (
        <Form
          onSubmit={
            type === 'criar'
              ? (e: React.FormEvent) => submitNewDrake(e, drake)
              : (e: React.FormEvent) => submitUpdateDrake(e, drakeUpdate)
          }>
          <ContainerInput>
            <Input
              type="text"
              required
              placeholder="Digite o nome do dragão:"
              value={type === 'criar' ? drake.name : drakeUpdate?.name}
              onChange={
                type === 'criar'
                  ? (e) => createDrake(e, 'name', e.target.value)
                  : (e) => changeDrake(e, 'name', e.target.value)
              }></Input>
            <Input
              type="text"
              required
              placeholder="Digite o tipo do dragão:"
              value={type === 'criar' ? drake.type : drakeUpdate?.type}
              onChange={
                type === 'criar'
                  ? (e) => createDrake(e, 'type', e.target.value)
                  : (e) => changeDrake(e, 'type', e.target.value)
              }></Input>
          </ContainerInput>
          <ContainerButton>
            <Button type="reset" onClick={() => openCloseModal()}>
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </ContainerButton>
        </Form>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [openCloseModal, createDrake, changeDrake],
  );

  return (
    <Container open={open}>
      <Content>
        <Header>
          <H1>{type}</H1>
          <IconClose onClick={() => openCloseModal()}>x</IconClose>
        </Header>
        <Divider />
        <Section>{handleFormModal(type)}</Section>
      </Content>
    </Container>
  );
};
