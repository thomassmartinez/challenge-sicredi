import React, {useCallback, useEffect, useMemo, useState} from 'react';
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
  const [drakeUpdate, setDrakeUpdate] = useState<IDragon>({
    name: '',
    type: '',
  } as IDragon);
  const [drake, setDrake] = useState<Omit<IDragon, 'id'>>({
    name: '',
    type: '',
  } as Omit<IDragon, 'id'>);

  useEffect(() => {
    setDrake({name: '', type: ''} as IDragon);
    setDrakeUpdate({} as IDragon);
    if (type === 'alterar' && data) {
      setDrakeUpdate(data);
    }
  }, [type, data, setDrake, setDrakeUpdate]);

  const changeDrake = useCallback(
    (e: React.FormEvent, item, value) => {
      drakeUpdate && setDrakeUpdate({...drakeUpdate, [item]: value});
    },

    [drakeUpdate],
  );

  const createDrake = useCallback(
    (e: React.FormEvent, item, value) => {
      setDrake({...drake, [item]: value});
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

  const handleCreateForm = useMemo(() => {
    return (
      <Form onSubmit={(e: React.FormEvent) => submitNewDrake(e, drake)}>
        <ContainerInput>
          <Input
            type="text"
            data-testid="inputName"
            required
            placeholder="Digite o nome do dragão:"
            value={drake.name}
            onChange={(e) => createDrake(e, 'name', e.target.value)}></Input>
          <Input
            type="text"
            data-testid="inputType"
            required
            placeholder="Digite o tipo do dragão:"
            value={drake.type}
            onChange={(e) => createDrake(e, 'type', e.target.value)}></Input>
        </ContainerInput>
        <ContainerButton>
          <Button
            data-testid="btnCloseModal"
            type="reset"
            onClick={() => openCloseModal()}>
            Cancelar
          </Button>
          <Button data-testid="btnConfirmModal" type="submit">
            Salvar
          </Button>
        </ContainerButton>
      </Form>
    );
  }, [openCloseModal, createDrake, submitNewDrake, drake]);

  const handleUpdateForm = useMemo(() => {
    return (
      <Form
        onSubmit={(e: React.FormEvent) => submitUpdateDrake(e, drakeUpdate)}>
        <ContainerInput>
          <Input
            type="text"
            data-testid="inputName"
            required
            placeholder="Digite o nome do dragão:"
            value={drakeUpdate.name}
            onChange={(e) => changeDrake(e, 'name', e.target.value)}></Input>
          <Input
            type="text"
            data-testid="inputType"
            required
            placeholder="Digite o tipo do dragão:"
            value={drakeUpdate.type}
            onChange={(e) => changeDrake(e, 'type', e.target.value)}></Input>
        </ContainerInput>
        <ContainerButton>
          <Button
            data-testid="btnCloseModal"
            type="reset"
            onClick={() => openCloseModal()}>
            Cancelar
          </Button>
          <Button data-testid="btnConfirmModal" type="submit">
            Salvar
          </Button>
        </ContainerButton>
      </Form>
    );
  }, [openCloseModal, changeDrake, submitUpdateDrake, drakeUpdate]);

  return (
    <Container open={open}>
      <Content>
        <Header>
          <H1>{type}</H1>
          <IconClose
            data-testid="iconCloseModal"
            onClick={() => openCloseModal()}>
            x
          </IconClose>
        </Header>
        <Divider />
        <Section>
          {type === 'criar' ? handleCreateForm : handleUpdateForm}
        </Section>
      </Content>
    </Container>
  );
};
