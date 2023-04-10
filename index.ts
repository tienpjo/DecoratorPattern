interface ILogger {
  log(msg: string): void;
}

class DLogger implements ILogger {
  log(msg: string): void {
    console.log(`DLogger: ${msg}`);
  }
}

abstract class DecoratorLogger implements ILogger {
  constructor(public logger: ILogger) {}
  abstract log(msg: string): void;
}

class toLowerCase extends DecoratorLogger {
  constructor(logger: ILogger) {
    super(logger);
  }
  log(msg: string): void {
    this.logger.log(`${msg.toLowerCase()}`);
  }
}

class AsterRisk extends DecoratorLogger {
  constructor(logger: ILogger) {
    super(logger);
  }
  log(msg: string): void {
    this.logger.log(`***************${msg}***************`);
  }
}

class AddNumber extends DecoratorLogger {
  constructor(logger: ILogger) {
    super(logger);
  }

  log(msg: string): void {
    this.logger.log(`1512${msg}19999995`);
  }
}
let logger = new DLogger();
let loggerToLowercase = new toLowerCase(logger);
// loggerToLowercase.log('TEST TEST');
let AddAsterRisk = new AsterRisk(loggerToLowercase);
///AddAsterRisk.log('Hello Decorator Patten');
//extend moudles project = add class
let addNumber = new AddNumber(AddAsterRisk);
addNumber.log('000000');
