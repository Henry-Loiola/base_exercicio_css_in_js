import { LinkAnuncio, TitleAnuncioDaVaga, VagasAnuncio } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: Props) => (
  <VagasAnuncio>
    <TitleAnuncioDaVaga>{titulo}</TitleAnuncioDaVaga>
    <ul>
      <li>Localização: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratação: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>
    <LinkAnuncio href="#">Ver detalhes e candidatar-se</LinkAnuncio>
  </VagasAnuncio>
)

export default Vaga
