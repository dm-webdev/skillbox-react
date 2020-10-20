import React from "react";

// Old constructor example
// function OldConstructor(fieldValue) {
//   this.field = fieldValue || 123;
// };

// OldConstructor.prototype.method = function() {
//     return this.field;
// };

// const instance = new OldConstructor();
// instance.method(); // -> 123

class Constructor {
  field: number = 123;

  constructor(arg: number) {
    this.field = arg;
  }

  public publicMethod(): number {
    // модификаторы доступа public, private, protected
    this.protectedMethod;
    return this.field;
  }

  protected protectedMethod(): number {
    //
    this.publicMethod;
    return this.field + 10;
  }

  private privateMethod(): number {
    //не доступен в наследниках
    return this.field + 30;
  }
}

// модификаторы доступа public, private, protected: нельзя понижать уровень доступа!!!

const instance = new Constructor(46);

instance.publicMethod;

class Child extends Constructor {
  public childMethod() {
    this.protectedMethod;
    this.publicMethod;
  }

  protected protMethod() {
    return super.protectedMethod;
  }
}

// абстрактные классы!!! Это круто )

abstract class AbstractClass {
  //их невозможно инстанциировать, можно только наследовать
  public abstract abstractField: number;

  public abstract abstractMethod(): number;

  protected protectedMethod() {
    return this.abstractField;
  }
}

// const instance2 = new AbstractClass;

class NewChild3 extends AbstractClass {
  // +рефакторинг!!
  public abstractField: number = 13;
  public abstractMethod(): number {
    return this.abstractField;
  }
}

// End 11:23

interface MyInterface {
  // +рефакторинг!! имплементация интерфейсов!!!
  field: string;
  method(): string;
}

class NewClassБ<T> implements MyInterface {
  field: string = "1332";
  public conf?: T;

  method(): string {
    throw new Error("Method not implemented.");
  }
}


// React Class

class MyComponent extends React.Component<{prop1: number }, {state1: string}> { 
  constructor(props: { prop1: number}) {
    super(props);
    this.state = {
      state1: "159",
    }
  }
  
  public render() {
    return (
    <div>{ this.props.prop1 }</div>
    )
  }
}