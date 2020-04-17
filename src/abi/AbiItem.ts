import {
  Fragment,
  JsonFragment,
  EventFragment,
  FunctionFragment,
  ConstructorFragment,
  ParamType,
} from '@ethersproject/abi';

export class AbiItem {
  public static from(input: Fragment | JsonFragment | string): AbiItem {
    try {
      const data = typeof input === 'string' ? JSON.parse(input) : input;
      return new AbiItem(Fragment.from(data));
    } catch (error) {
      throw new Error(`Failed to derive abi from input: ${error}`);
    }
  }

  constructor(public readonly fragment: Fragment) {}

  protected static getParameterSignature(param: ParamType, prefixed: boolean = true): string {
    const prefix = prefixed && param.indexed ? 'indexed ' : '';

    if (param.type === 'tuple') {
      const components = param.components.map((component) => AbiItem.getParameterSignature(component, prefixed));
      return `(${prefix}${components.join(',')})`;
    }

    return `${prefix}${param.type}`;
  }

  public get signature() {
    if (EventFragment.isEventFragment(this.fragment)) {
      const event = this.fragment;
      const inputs = event.inputs.map((param) => AbiItem.getParameterSignature(param));
      return `${event.name}(${inputs.join(',')})`;
    }

    if (ConstructorFragment.isConstructorFragment(this.fragment)) {
      const constructor = this.fragment;
      const inputs = constructor.inputs.map((param) => AbiItem.getParameterSignature(param));
      return `${constructor.name}(${inputs.join(',')})`;
    }

    if (FunctionFragment.isFunctionFragment(this.fragment)) {
      const fn = this.fragment;
      const inputs = fn.inputs.map((param) => AbiItem.getParameterSignature(param));
      const outputs = fn.outputs?.map((param) => AbiItem.getParameterSignature(param)) ?? [];
      return `${fn.name}(${inputs.join(',')})${outputs.length ? `:(${outputs.join(',')})` : ''}`;
    }

    throw new Error('Invalid fragment.');
  }

  public toJSON() {
    return this.fragment;
  }
}
