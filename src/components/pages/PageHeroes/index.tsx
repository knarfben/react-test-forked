import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStores } from '../../../hooks/useStores';
import { buildVariants } from '../../../libs/react-helpers/buildVariants';
import ContainerFlex from '../../common/ContainerFlex';
import Label from '../../common/Label';
import Hero from './components/Hero';

export interface IPageWelcomeProps {}

const StyledContainerFlex = styled(ContainerFlex)((props) => {
  return buildVariants(props).css({}).end();
});

const Table = styled.table((props) => {
  return buildVariants(props)
    .css({
      overflowY: 'auto',
      display: 'flex',
    })
    .end();
});

const Header = styled.td((props) => {
  return buildVariants(props)
    .css({
      fontWeight: 'bold',
      backgroundColor: 'crimson',
    })
    .end();
});
/**
 * Heroes page.
 */
const PageHeroes = (props: IPageWelcomeProps) => {
  const { storePageHeroes } = useStores();
  const [publisher, setPublisher] = useState(false);

  useEffect(() => {
    storePageHeroes.fetchSuperHeroes();

    return () => {
      storePageHeroes.reset();
    };
  }, [storePageHeroes]);
  const handleClick = () => {
    setPublisher(!publisher);
  };

  const heroes = publisher
    ? storePageHeroes.heroes
        .slice()
        .sort((h1, h2) =>
          h1.biography.publisher < h2.biography.publisher ? -1 : 1
        )
    : storePageHeroes.heroes;

  return (
    <StyledContainerFlex
      name="HeroesPage"
      flexDirection="column"
      flexGap="tenb-space-32"
      fullWidth
      fullHeight
    >
      <button onClick={handleClick}>toggle publisher mode</button>
      <Label variant="Heading1">Super Heroes</Label>

      <Table>
        <tbody>
          <tr>
            <Header>Hero name</Header>
            <Header>Publisher</Header>
          </tr>
          {heroes.map((hero) => {
            return <Hero hero={hero} key={hero.id} />;
          })}
        </tbody>
      </Table>
    </StyledContainerFlex>
  );
};

export default observer(PageHeroes);
