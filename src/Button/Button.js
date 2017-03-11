import Inferno from 'inferno';
import Component from 'inferno-component';

const style = {
    "font-size": "20px",
    "border-radius": "25px",
    "width": "154px",
    "height": "41px",
    "background-color": "rgba(255, 255, 255, 0.39)",
    "color": "white"
}

export default class Button extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <button style={style}>{this.props.children}</button>
        );
    }
}
