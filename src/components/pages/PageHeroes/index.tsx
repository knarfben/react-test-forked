import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStores } from '../../../hooks/useStores';
import { buildVariants } from '../../../libs/react-helpers/buildVariants';
import ContainerFlex from '../../common/ContainerFlex';
import Label from '../../common/Label';
import FranchiseSelector from './components/FranchiseSelector';
import Hero from './components/Hero';

export interface IPageWelcomeProps {}

const StyledContainerFlex = styled(ContainerFlex)((props) => {
  return buildVariants(props)
    .css({
      // '@keyframes zoom': {
      //   '0%': {
      //     transform: 'scale(1)',
      //   },
      //   '100%': {
      //     transform: 'scale(1.5)',
      //   },
      // },
    })
    .css({
      // display: 'inline-flex',
      // position: 'fixed',
      // top: '50%',
      // left: '50%',
      // height: '1px',
      // width: '1px',
      // backgroundColor: '#fff',
      // borderRadius: '50%',
      // boxShadow:
      //   '-24vw -44vh 2px 2px #fff,38vw -4vh 0px 0px #fff,-20vw -48vh 1px 2px #fff,-39vw 38vh 3px 1px #fff,-42vw -11vh 0px 3px #fff,12vw 15vh 3px 3px #fff,42vw 6vh 3px 2px #fff,-8vw 9vh 0px 2px #fff,34vw -38vh 1px 0px #fff,-17vw 45vh 3px 1px #fff,22vw -36vh 3px 2px #fff,-42vw 1vh 1px 0px #fff',
      // animation: 'zoom 10s alternate infinite',
    })
    .end();
});

/**
 * Heroes page.
 */
const PageHeroes = (props: IPageWelcomeProps) => {
  const { storePageHeroes } = useStores();
  const [selectedPublishers, setSelectedPublishers] = useState<string[]>([]);

  // extract unique publishers from available heroes
  // extract unique publishers from available heroes
  const availablePublishers = storePageHeroes.heroes
    .reduce((acc, { biography: { publisher } }) => {
      if (!acc.includes(publisher)) {
        acc.push(publisher);
      }
      return acc;
    }, [] as string[])
    .slice()
    .sort();

  const selectedHeroes = storePageHeroes.heroes.filter(
    ({ biography: { publisher } }) => {
      return selectedPublishers.length === 0
        ? true
        : selectedPublishers.includes(publisher);
    }
  );

  useEffect(() => {
    storePageHeroes.fetchSuperHeroes();

    return () => {
      storePageHeroes.reset();
    };
  }, [storePageHeroes]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    const selected = selectedPublishers.includes(value)
      ? selectedPublishers.filter((publisher) => publisher !== value)
      : [...selectedPublishers, value];

    setSelectedPublishers(selected);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '50px',
          padding: '10px',
          alignItems: 'center',
        }}
      >
        <Label variant="Heading1">Heroes & Villains</Label>
        <FranchiseSelector
          availablePublishers={availablePublishers}
          selectedPublishers={selectedPublishers}
          setSelectedPublishers={setSelectedPublishers}
          handleChange={handleChange}
        />
      </div>
      <StyledContainerFlex name="HeroesPage" flexGap="tenb-space-4" fullWidth>
        {selectedHeroes.map((hero) => (
          <Hero key={hero.id} hero={hero} />
        ))}
      </StyledContainerFlex>
    </>
  );
};

export default observer(PageHeroes);
