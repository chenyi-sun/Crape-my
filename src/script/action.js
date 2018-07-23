/**行为模式  描述有事情发生了这件事情*/
const ADD_TODO = 'ADD_TODO';

const VisibilityFilters = { //行为
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

const actions = [ //行为
    {
        type: 'UN_SHOW_INPUT',
        text: '显示输入框',
        index: 0
    },
    {
        type: 'UN_SHOW_INPUT',
        text: '不显示输入框',
        index: 1
    },
    {
        type: 'SET_VISI',
        filter: 'SHOW_COMPLETED'
    }
];

function addTodo(text){ //行为函数
    return { type:ADD_TODO, text };
}


// const state = {
//     visibilityFilter: 'SHOW_ALL',
//     todos: [
//         {
//             text: 'Consider using Redux',
//             completed: true,
//         },
//         {
//             text: 'Keep all state in a single tree',
//             completed: false
//         }
//     ]
// }
export {
    actions,
    addTodo,
    VisibilityFilters
}

