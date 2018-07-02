require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
import React from 'react';
import ReactDom, {render} from 'react-dom';
import { VelocityComponent } from 'velocity-react';
import { createStore } from 'redux';
import reducer from './actions';
import UL from './userlogin'; //登录
import SD from './../components/showDetail';//显示详细
import ID from './inputDetail';//输入出生时间

const VelocityLetter = ({ letter }) => (
  <VelocityComponent
    runOnMount
    animation={{ opacity: 1, marginTop: 0 }}
    duration={500}
  >
    <p style={styles.letter}>{letter}</p>
  </VelocityComponent>

)
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            letters: [],
            showdetail: false,
        }
    }
    render() {
      const showtest = store.getState().Showinput; //UL is show;
      return (
        <div className="App">
          <SD show={!showtest}  />
          <div  className="padd">
              <UL show={showtest} submit={()=>store.dispatch({type: 'UN_SHOW_INPUT'})}/>
          </div>
          <div>
            <ID show={showtest}></ID>
          </div>
        </div>
      );
    }
}


const store = createStore(reducer);

const rendation =() => { 
  ReactDom.render(
      <App/>,
      document.getElementById('root')
  );
}

rendation();
store.subscribe(rendation);

console.log();



