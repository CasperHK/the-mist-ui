import Inferno from 'inferno';
import Component from 'inferno-component';

const style = {
    "font-size": "20px",
    "border-radius": "3px",
    "background-color": "#4CAF50"
}

export default class Background extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div style={style}>{this.props.children}</div>
        );
    }
}
