/**输入用户的账号密码 */
import React from 'react';
import ReactDom, {render} from 'react-dom';
require('./../less/userlogin.less');
class showdetailin extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {show, submit} = this.props;
        return(
            show?<div>
                    <input placeholder="请填写出生年月"/>
                    <br/>
                    <input type="submit" value="提交" onClick={()=>submit()}/>
                </div>
                :
                <div></div>
        )
    };
}
export default showdetailin;