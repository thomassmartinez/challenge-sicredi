import React, {useState, useCallback} from 'react';
import {Modal} from 'shared/components/Modal';
import {Button, Container, Content} from './styles';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const openCloseModal = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  return (
    <>
      <Container>
        <Content>
          <div>
            <img alt="" />
            <h1>Dragon</h1>
          </div>
          <Button onClick={openCloseModal}> Criar</Button>
        </Content>
      </Container>
      <Modal open={open} openCloseModal={openCloseModal} type="criar" />
    </>
  );
};
