function Component(metadata: { selector: string; template: string }) {
  return function (constructor: Function) {
    constructor.prototype.selector = metadata.selector;
    constructor.prototype.template = metadata.template;

    const element = document.createElement(metadata.selector);
    element.innerHTML = metadata.template;
    document.body.appendChild(element);
  };
}

@Component({
  selector: 'app-test',
  template: `
  <div>
    <h1>Test</h1>
  </div>
  `,  
})

class Test {
  constructor(){
    console.log('constructor test');
    
  }
}