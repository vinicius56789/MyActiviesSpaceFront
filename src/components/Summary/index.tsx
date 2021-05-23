import {GoFile, GoNote, GoGraph} from 'react-icons/go'
import { Container } from './styles'

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Unidade Curriculares</p>
                    <GoFile size={40}/>
                </header>
                <strong>
                    5
                </strong>
            </div>
            <div>
                <header>
                    <p>Atividades</p>
                    <GoNote size={40}/>
                </header>
                <strong>
                    3
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Média Geral</p>
                    <GoGraph size={40}/>
                </header>
                <strong>
                    5.75
                </strong>
            </div>
        </Container>
    )
}