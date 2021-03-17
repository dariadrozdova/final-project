Hello!

I tried to add Redux to my project but did not have enough time to complete it.

I planned to use React-redux.

index.html file should have looked like this:
```
import { Provider } from 'react-redux';
import store from './redux/reducers/rootReducer';

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
```
I deleted Provider tag for the successful build of the project.

To finish adding Redux I need to use:
* redux-form for input form in the main page
* connect(), mapStateToProps, mapDispatchToProps to connect components
