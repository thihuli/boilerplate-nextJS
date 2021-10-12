import * as S from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Container>
    <S.Logo src="img/icon-192.png" alt="logo do nextJS" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="img/hero.svg"
      alt="desenvolvedor sentado de frente a tela"
    />
  </S.Container>
);

export default Main;
