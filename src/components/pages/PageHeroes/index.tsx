import { observer } from 'mobx-react-lite';
import { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStores } from '../../../hooks/useStores';
import { buildVariants } from '../../../libs/react-helpers/buildVariants';
import ContainerFlex from '../../common/ContainerFlex';
import Label from '../../common/Label';
import FranchiseSelector from './components/FranchiseSelector';
import Hero from './components/Hero';

export interface IPageWelcomeProps {}

const StyledContainerFlex = styled(ContainerFlex)((props) => {
  return buildVariants(props).css({ display: 'inline-flex' }).end();
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
    <div>
      <Label variant="Heading1">Heroes&Villains</Label>
      <FranchiseSelector
        availablePublishers={availablePublishers}
        selectedPublishers={selectedPublishers}
        setSelectedPublishers={setSelectedPublishers}
        handleChange={handleChange}
      />
      <Suspense
        fallback={
          <div
            style={{ backgroundColor: 'red', width: '100px', height: '100px' }}
          ></div>
        }
      >
        <StyledContainerFlex name="HeroesPage" flexGap="tenb-space-4" fullWidth>
          {selectedHeroes.map((hero) => (
            <Hero key={hero.id} hero={hero} />
          ))}
        </StyledContainerFlex>
      </Suspense>
    </div>
  );
};

export default observer(PageHeroes);
