import React from 'react'
import ReactDom from 'react-dom'
import Counter1 from './components/Counter1'
import { Provider } from './react-redux'
import store from './store'


ReactDom.render(<Provider store={store}>
  <Counter1 />
</Provider>, document.getElementById('root')

)