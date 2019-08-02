import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware, combineEpics } from 'redux-observable';
import Epics from '../Epics'
import Reducers from '../Reducers';
const epicMiddleware = createEpicMiddleware();

const store = createStore(
    Reducers,
    applyMiddleware(epicMiddleware)
)
epicMiddleware.run(Epics.getAllTopic)

export default store;