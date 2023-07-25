import React from 'react';
import ReactDOM from 'react-dom';

class Treino extends React.Component{
    função(){
        alert('abestado!')
    }
    render(){
        return(
            <div>
                <button onClick={this.função} >Não Click</button>
            </div>
        );
    }
}
ReactDOM.render(<Treino />, document.getElementById('root'));