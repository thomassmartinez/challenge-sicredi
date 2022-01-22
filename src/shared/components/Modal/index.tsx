import React, {useCallback, useEffect, useState} from 'react';
import {IDragon} from 'shared/services/dragons';

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
  type: 'criar' | 'alterar';
  openCloseModal(): void;
}

export const Modal: React.FC<IPropsModal> = ({
  open,
  data,
  openCloseModal,
  type,
}) => {
  const [drakeUpdate, setDrakeUpdate] = useState<IDragon>({} as IDragon);
  const [drake, setDrake] = useState<Omit<IDragon, 'id'>>(
    {} as Omit<IDragon, 'id'>,
  );

  const changeDrake = useCallback(
    (e: React.FormEvent, value, item) => {
      drakeUpdate && setDrakeUpdate({...drakeUpdate, [value]: item});
    },

    [drakeUpdate],
  );
  console.log(drakeUpdate, drake);

  const createDrake = useCallback(
    (e: React.FormEvent, value, item) => {
      setDrake({...drake, [value]: item});
    },
    [drake],
  );

  useEffect(() => {
    if (type === 'alterar' && data) {
      setDrakeUpdate(data);
    }
  }, [type, data]);

  const handleFormModal = useCallback(
    (type: string) => {
      return (
        <Form onSubmit={() => {}}>
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
