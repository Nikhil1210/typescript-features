interface IConfiguration {
  baseUrl: string;
  title: number;
}
type ConfigurationOption = keyof IConfiguration;

export default class KeyofDemo {
    constructor() {
        let var1: ConfigurationOption;
       // var1 = "ewrwer"; // nothing other than baseUrl and title are allowed
        this.set("baseUrl", "https://moin.world");
        this.set("title", 42);
        // this.set("baseUrl", true); // Invalid! Compiler catches this.
    }

    private set<T extends ConfigurationOption>(key: T, value: IConfiguration[T]) {
    console.log(`Setting: ${key} to ${value}`);
    }

}
