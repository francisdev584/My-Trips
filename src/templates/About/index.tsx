import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/Map/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eos dicta
        officia saepe ullam quo accusantium amet sapiente, alias eius optio
        minus? Repellat autem dolor earum tempora accusamus, cum inventore!
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
