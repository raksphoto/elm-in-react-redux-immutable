import React from 'react'
import ReactDOM from 'react-dom'
let Redux = require('redux')
import Im from 'immutable'
import { Provider, connect } from 'react-redux'

let model = Redux.createStore(update)

let init = Im.Map({ value: 5 })

function update(state = init, action = {}) {
    let value = state.get('value')
    switch (action.type) {
        case 'Increment':
            console.log('increment', state)
            return state.set('value', value + 1)
        case 'Decrement':
            console.log('decrement', state)
            return state.set('value', value - 1)
        default:
            return state
    }
}

class View extends React.Component {
    render() {
        let { value, dispatch } = this.props
        let decrement = () => {
            dispatch({ type: 'Decrement' })
        }
        let increment = () => {
            dispatch({ type: 'Increment' })
        }

        return (
            <div>
                <button onClick={decrement}>-</button>
                <div>{value}</div>
                <button onClick={increment}>+</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.get('value')
    }
}

let Component = connect(mapStateToProps)(View)

var mountpoint = document.getElementById('app-mountpoint')

class Program extends React.Component {
    render() {
        return (
            <Provider store={this.props.model}>
                <Component />
            </Provider>
        )
    }
}

// Render the app
ReactDOM.render(
    React.createElement(Program, {
        model: model
    }),
    mountpoint
)

console.log('mounted')
