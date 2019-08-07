import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware } from 'redux-observable';
import rootEpics from '../Epics'
import Reducers from '../Reducers';
const epicMiddleware = createEpicMiddleware();

const store = createStore(
    Reducers,
    applyMiddleware(epicMiddleware)
)
epicMiddleware.run(rootEpics)

export default store;