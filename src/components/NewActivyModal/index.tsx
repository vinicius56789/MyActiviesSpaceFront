import Modal from 'react-modal'
import {FiX} from 'react-icons/fi'
import {Container, Error} from './styles'
import {useForm} from 'react-hook-form'

interface NewActivyModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewActivyModalData{
    courseunit: string;
    activy: string;
    date: Date;
}

export function NewActivyModal({isOpen, onRequestClose}:NewActivyModalProps){

    const {register, handleSubmit, formState: {errors}} = useForm<NewActivyModalData>()
    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >   
            <Container>
                <h2>Cadastrar Atividade</h2>
                <button type="button" onClick={onRequestClose} className="react-modal-close">
                    <FiX size={20}/>
                </button>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Unidade Curricular" {...register("courseunit", {required:true})}/>
                    {errors.courseunit && <Error>Preenchimento Obrigatório</Error>}
                    <input type="text" placeholder="Atividade" {...register("activy", {required:true})}/>
                    {errors.courseunit && <Error>Preenchimento Obrigatório</Error>}
                    <input type="date" placeholder="Data da Atividade" {...register("date", {required:true})}/>
                    {errors.courseunit && <Error>Preenchimento Obrigatório</Error>}
                    <button type="submit">Cadastrar</button>
                </form>
            </Container>
        </Modal> 
    )
}