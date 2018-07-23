/* redux 的多种行为模式 统一设置*/
import { combineReducers } from 'redux';
import { actions, addTodo ,VisibilityFilters} from './action';
// const { SHOW_ALL } = VisibilityFilters;

const initialState = { //初始化状态
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state, action) {
    if(typeof state === 'underfined') {
        return initialState;
    }

    return state;
}

console.log(VisibilityFilters);

const Showinput = (state = false, action) => {
    switch (action.type){                    //是否显示INPUT模块
        case 'SHOW_INPUT':                   //显示
             return 1;                       
        case 'UN_SHOW_INPUT':                //不显示
             return 0;
        default: return 0;
    }
}

const statusMessage = (state = 0, action) => {
    return state;
}

const reducer = combineReducers({
    Showinput,
    statusMessage,
    Ask: Showinput
});

export default reducer; 