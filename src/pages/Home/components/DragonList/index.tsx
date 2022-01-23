import React, {useState, useCallback, useEffect} from 'react';

import {DragonServices, IDragon} from 'shared/services/dragons';
import {Container, Content, Table, Button, Header} from './styles';

import format from 'date-fns/format';
import {Modal} from 'shared/components/Modal';

export const DragonList: React.FC = () => {
  const [drakes, setDrakes] = useState<IDragon[]>([]);
  const [drake, setDrake] = useState<IDragon>({} as IDragon);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [typeModal, setTypeModal] = useState('criar');

  const getListDrakes = useCallback(async () => {
    DragonServices.getDragonList()
      .then((data) => {
        setDrakes(data);
      })
      .catch(() => {
        alert('Erro ao buscar dragões');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getSpecificDrake = useCallback(async (id: string) => {
    DragonServices.getDragon(id)
      .then((data) => {
        setDrake(data);
      })
      .catch(() => {
        alert('Erro ao buscar dragões');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const removeDrake = useCallback(
    async (id: string) => {
      try {
        await DragonServices.deleteDragon(id);
      } catch (err) {
        alert('Erro ao remover dragão');
      } finally {
        getListDrakes();
      }
    },
    [getListDrakes],
  );

  const openCloseModal = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const handleModalOpenClose = useCallback(
    (type: string, id?: string) => {
      setTypeModal(type);
      if (id) {
        getSpecificDrake(id);
      }
      openCloseModal();
    },
    [getSpecificDrake, openCloseModal],
  );

  useEffect(() => {
    getListDrakes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Content>
          <Header>
            <Button
              onClick={() => {
                handleModalOpenClose('criar');
              }}>
              Criar
            </Button>
          </Header>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Nascimento</th>
                <th>Espécie</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                drakes.map(({id, name, createdAt, type}) => (
                  <tr key={id}>
                    <td onClick={() => handleModalOpenClose('alterar', id)}>
                      {name}
                    </td>
                    <td onClick={() => handleModalOpenClose('alterar', id)}>
                      {format(new Date(createdAt), 'dd/MM/yyyy HH:mm')}
                    </td>
                    <td onClick={() => handleModalOpenClose('alterar', id)}>
                      {type}
                    </td>
                    <td>
                      <span onClick={() => removeDrake(id)}>X</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Content>
      </Container>
      <Modal
        open={open}
        data={drake}
        openCloseModal={openCloseModal}
        type={typeModal}
        getListDrakes={getListDrakes}
      />
    </>
  );
};
