import React, {Component} from 'react';

import Header from './components/Header';

//The app will get a value of props as children which are going to be rendered below header.
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default App;