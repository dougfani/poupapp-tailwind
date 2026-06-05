import { Aside } from './components/Asides';
import { Container } from './components/Container';
import { Main } from './components/Main';
import { SearchInput } from './components/SearchInput';

function App() {
    return (
        <div className="min-h-screen bg-neutral-background">
            <Container>
                <Aside />
                <Main>
                    <SearchInput name='q' />
                </Main>
            </Container>
        </div>
    );
}

export default App;
