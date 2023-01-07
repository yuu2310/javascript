const obj = {
  first_name: 'yuta',
  last_name: 'hosoya',
  printFullName: function(){
    console.log('world');
  }
}

obj.printFullName();


class MyObj {
  constructor(){
    this.first_name = 'yuta';
    this.last_name = 'hosoya';
  }

  printFullName(){
    console.log('hello');
  }
}

const obj2 = new MyObj()


obj2.printFullName();