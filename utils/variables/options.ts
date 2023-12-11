import { nanoid } from 'nanoid';
import { ITraderType } from '@/utils/types';

export const traderType_options: ITraderType[] = [
  { key: nanoid(), name: 'B2B', value: 'b2b' },
  { key: nanoid(), name: 'B2C', value: 'b2c' },
];