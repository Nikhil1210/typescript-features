interface IConfiguration {
  baseUrl: string;
  ttl: number;
}
type ConfigurationOption = keyof IConfiguration;

export default class KeyofDemo {
    constructor() {
        this.set("baseUrl", "https://moin.world");
        this.set("ttl", 42);
        // this.set("baseUrl", true); // Invalid! Compiler catches this.
    }

    private set<T extends ConfigurationOption>(key: T, value: IConfiguration[T]) {
    console.log(`Setting: ${key} to ${value}`);
    }

}
