import abi from './__fixtures__/Gravity.json';
import { Abi } from './Abi';

describe('Abi', () => {
  let gravity: Abi;

  beforeAll(() => {
    gravity = Abi.from(abi);
  });

  it('Abi.from accepts json', () => {
    Abi.from(abi);
  });

  it('Abi.from accepts a json string', () => {
    Abi.from(JSON.stringify(abi));
  });

  it('Abi.from can handle serialization and deserialization', () => {
    Abi.from(JSON.stringify(Abi.from(abi)));
  });

  it('Signatures are generated properly', () => {
    const signatures = gravity.items.map((item) => item.signature);
    expect(signatures).toMatchObject([
      'updateGravatarImage(string)',
      'setMythicalGravatar()',
      'getGravatar(address):(string,string)',
      'gravatarToOwner(uint256):(address)',
      'ownerToGravatar(address):(uint256)',
      'updateGravatarName(string)',
      'createGravatar(string,string)',
      'gravatars(uint256):(address,string,string)',
      'NewGravatar(uint256,indexed address,string,string)',
      'UpdatedGravatar(uint256,indexed address,string,string)',
    ]);
  });
});
