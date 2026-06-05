import { Aside } from './components/Asides';
import { Container } from './components/Container';
import { Main } from './components/Main';
import { SearchInput } from './components/SearchInput';
import { Typography } from './components/Typography';

function App() {
    return (
        <div className="min-h-screen bg-neutral-background">
            <Container>
                <Aside />
                <Main>
                    <SearchInput name="q" />
                    <div>
                        <Typography variant="h1">
                            Olá, Douglas!
                        </Typography>
                        <Typography>
                            Veja como estão suas finanças hoje.
                        </Typography>
                    </div>
                </Main>
            </Container>
        </div>
    );
}

export default App;
