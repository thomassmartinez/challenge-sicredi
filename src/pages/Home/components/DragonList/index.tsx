import React, {useState, useCallback, useEffect} from 'react';

import {DragonServices, IDragon} from 'shared/services/dragons';
import {Container, Content, Table, Button, Header} from './styles';

import format from 'date-fns/format';
import {Modal} from 'shared/components/Modal';
import {orderByName} from 'shared/utils/formatOrderBy';

export const DragonList: React.FC = () => {
  const [drakes, setDrakes] = useState<IDragon[]>([]);
  const [drakeToUpdate, setDrakeToUpdate] = useState<IDragon>({
    name: '',
    type: '',
    createdAt: new Date(),
    id: '',
  } as IDragon);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [typeModal, setTypeModal] = useState('criar');

  const getListDrakes = useCallback(async () => {
    DragonServices.getDragonList()
      .then((data) => {
        setDrakes(orderByName(data));
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
        setDrakeToUpdate(data);
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
  }, [getListDrakes]);

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
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!loading ? (
                drakes.map(({id, name, createdAt, type}) => (
                  <tr key={id}>
                    <td data-testid="nameDrake">{name}</td>
                    <td data-testid="dtDrake">
                      {format(new Date(createdAt), 'dd/MM/yyyy HH:mm')}
                    </td>
                    <td data-testid="typeDrake">{type}</td>
                    <td>
                      <span
                        className="td-clicable"
                        data-testid="btnDelete"
                        onClick={() => removeDrake(id)}>
                        X
                      </span>
                    </td>
                    <td
                      className="td-clicable"
                      onClick={() => handleModalOpenClose('alterar', id)}>
                      Alt
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>... loading</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </Table>
        </Content>
      </Container>
      <Modal
        open={open}
        data={drakeToUpdate}
        openCloseModal={openCloseModal}
        type={typeModal}
        getListDrakes={getListDrakes}
      />
    </>
  );
};
