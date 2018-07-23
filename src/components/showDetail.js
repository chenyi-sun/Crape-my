/**显示输入的图表的模块 */
import React from 'react';
import ReactDom, {render} from 'react-dom';
import {air, FlagFor,sixthYear} from './mustNeed';
require('./../less/components/showdetail.less');
class Showdetailin extends React.Component {
    render(){
        return(
             <div className="in">
                 <div className="air">{this.props.air}-{this.props.ins}</div>
             </div>
        )
    };
}

sixthYear.map((item, index)=>{
    console.log(item);
});
//  <div className="in" key={index} >
             {/*<div className="air">{air[FlagFor[index]]}</div>*/}
        {/*</div>*/}
function Doms(prop){
    const arrs =  [2,32,33,32,45,67,99,32,100,20,21,22,32,32,100,20];
    let alls = arrs.map((item,index)=>{
        return(
            <Showdetailin key={index}
                ins={index}
                air={air[FlagFor[index]]
            }/>
        )
    });
    return (
        <div className="platform">
            {alls}
        </div>
    );
}

class showdetail extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {show} = this.props;
        const days = {
            year: 1991,
            mouth: 12,
            day: 16
        }
        return(
           show?<Doms prop={this.props}/>:<div></div>
        )
    };
}



export default showdetail;