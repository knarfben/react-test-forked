import { observer } from 'mobx-react-lite';
import { ChangeEventHandler, SyntheticEvent, useEffect, useState } from 'react';
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
      <Label variant="Heading1">Super Heroes</Label>
      <div>Pick Franchise!</div>
      <div>
        <select
          value={selectedPublishers}
          name="publishers"
          onChange={handleChange}
          multiple
        >
          {availablePublishers.map((publisher, idx) => (
            <option key={idx} value={publisher}>
              {publisher}
            </option>
          ))}
        </select>
        {JSON.stringify(selectedPublishers)}
      </div>
      <StyledContainerFlex name="HeroesPage" flexGap="tenb-space-4" fullWidth>
        {storePageHeroes.heroes.map((hero) => {
          return <Hero hero={hero} key={hero.id} />;
        })}
      </StyledContainerFlex>
    </>
  );
};

export default observer(PageHeroes);
