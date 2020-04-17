import { Fragment, JsonFragment } from '@ethersproject/abi';
import { AbiItem } from './AbiItem';

export class Abi {
  public static from(input: (AbiItem | Fragment | JsonFragment)[] | string): Abi {
    try {
      const data = typeof input === 'string' ? JSON.parse(input) : input;
      if (Array.isArray(data)) {
        const fragments = data.map((item: any) => AbiItem.from(item));
        return new Abi(fragments);
      }
    } catch (error) {
      throw new Error(`Failed to derive abi from input: ${error}`);
    }

    throw new Error('Invalid abi shape');
  }

  constructor(public readonly items: AbiItem[]) {}

  public toJSON() {
    return this.items;
  }
}
