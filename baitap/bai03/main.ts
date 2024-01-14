// Command interface
interface Command {
  execute(): void;
}

// Concrete command to calculate the sum of all elements in the array
class CalculateSumCommand implements Command {
  constructor(private array: number[][]) {}

  execute(): void {
    let sum = 0;
    for (const row of this.array) {
      for (const element of row) {
        sum += element;
      }
    }
    console.log(`Sum of all elements in the array: ${sum}`);
  }
}

// Concrete command to set all elements in the array to a given value
class SetDefaultValueCommand implements Command {
  constructor(private array: number[][], private value: number) {}

  execute(): void {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array[i].length; j++) {
        this.array[i][j] = this.value;
      }
    }
    console.log(`Set all elements in the array to ${this.value}`);
  }
}

// Concrete command to find the maximum value in the array
class FindMaxValueCommand implements Command {
  constructor(private array: number[][]) {}

  execute(): void {
    let max = Math.max(...this.array.map((row) => Math.max(...row)));
    console.log(`Maximum value in the array: ${max}`);
  }
}

// Concrete command to find the minimum value in the array
class FindMinValueCommand implements Command {
  constructor(private array: number[][]) {}

  execute(): void {
    let min = Math.min(...this.array.map((row) => Math.min(...row)));
    console.log(`Minimum value in the array: ${min}`);
  }
}

// Invoker class to manage and execute commands
class ArrayCommandInvoker {
  private command: Command | null = null;

  setCommand(command: Command): void {
    this.command = command;
  }

  executeCommand(): void {
    if (this.command) {
      this.command.execute();
    } else {
      console.log("No command set");
    }
  }
}

// Client code
const array: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const invoker = new ArrayCommandInvoker();

invoker.setCommand(new CalculateSumCommand(array));
invoker.executeCommand();

invoker.setCommand(new FindMaxValueCommand(array));
invoker.executeCommand();

invoker.setCommand(new FindMinValueCommand(array));
invoker.executeCommand();

invoker.setCommand(new SetDefaultValueCommand(array, 10));
invoker.executeCommand();


