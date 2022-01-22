import {Api} from 'shared/settings-api/api';

export interface IDragon {
  createdAt: Date;
  name?: string;
  type?: string;
  id: string;
  histories: any[];
}

const getDragonList = async (): Promise<IDragon[]> => {
  try {
    const {data} = await Api().get<IDragon[]>('dragon');

    return data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

const getDragon = async (id: string): Promise<IDragon[]> => {
  try {
    const {data} = await Api().get<IDragon[]>(`dragon/${id}`);

    return data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

const postDragon = async (body: IDragon): Promise<void> => {
  try {
    await Api().post<IDragon[]>(`dragon/`, body);
  } catch (error: any) {
    throw new Error(error.response);
  }
};

const putDragon = async (id: string, body: IDragon): Promise<void> => {
  try {
    await Api().put<IDragon[]>(`dragon/${id}`, body);
  } catch (error: any) {
    throw new Error(error.response);
  }
};

const deleteDragon = async (id: string): Promise<void> => {
  try {
    await Api().delete<IDragon[]>(`dragon/${id}`);
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const DragonServices = {
  getDragonList,
  getDragon,
  postDragon,
  putDragon,
  deleteDragon,
};
