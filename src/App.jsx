import { Aside } from './components/Asides';
import { Container } from './components/Container';

function App() {
    return (
        <div className="min-h-screen bg-neutral-background">
            <Container>
                <Aside />
            </Container>
        </div>
    );
}

export default App;
