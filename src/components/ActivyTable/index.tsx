import { Container } from "./styles";

export function ActivyTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividade</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programação WEB</td>
                        <td>Implementação de autenticação</td>
                        <td>8</td>
                        <td>23/05/2021</td>
                    </tr>
                    <tr>
                        <td>O Naruto pode ser um pouco duro as vezes</td>
                        <td>Talvez você não saiba disso</td>
                        <td>Mas o Naruto também cresceu sem pai</td>
                        <td>Na verdade, ele nunca conheceu nenhum dos pais</td>
                    </tr>
                    <tr>
                        <td>O Naruto pode ser um pouco duro as vezes</td>
                        <td>Talvez você não saiba disso</td>
                        <td>Mas o Naruto também cresceu sem pai</td>
                        <td>Na verdade, ele nunca conheceu nenhum dos pais</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}