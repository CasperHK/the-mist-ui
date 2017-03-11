import Button from './Button/Button';
import Background from './Background';

export default function MyApp({ children }) {
    return (
        <div>
            <Background>
                <h1>Inferno Boilerplate</h1>
                { children }
                <Button>BUTTON</Button>
            </Background>
        </div>
    );
}
