export class Point {
  public x: number = 0;
  public y: number = 0;
}

type Constructor<T> = new(...args: any[]) => T;

export function ThirdDimension<T extends Constructor<{}>>(Base: T) {
  // tslint:disable-next-line:max-classes-per-file
  return class extends Base {
    public z: number = 0;
    constructor(...args: any[]) {
      super(...args);
    }
  };
}
