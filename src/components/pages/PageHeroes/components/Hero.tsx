import { divide } from 'lodash';
import styled from 'styled-components';
import { useUrlBuilder } from '../../../../hooks/useUrlBuilder';
import { buildVariants } from '../../../../libs/react-helpers/buildVariants';
import { ITagProperties } from '../../../../libs/react-helpers/forwardProps/types';
import IHero from '../../../../models/hero.model';
import { themes } from '../../../../styles/themes';
import { handleShowHeroDetailsOnClick } from '../handlers';

export interface IHeroProps extends ITagProperties<HTMLTableRowElement> {
  hero: IHero;
}

const IMG = styled.img((props) => {
  return buildVariants(props).css({}).end();
});

const IMG_CONTAINER = styled.div((props) => {
  return buildVariants(props)
    .css({
      height: 'tenb-space-64',
    })
    .end();
});

/**
 * Dashboard page.
 */
export function Hero(props: IHeroProps) {
  const { urlBuilder } = useUrlBuilder();

  return (
    <IMG_CONTAINER
      onClick={handleShowHeroDetailsOnClick(urlBuilder)(props.hero)}
    >
      <IMG alt={props.hero.name} src={props.hero.images.xs} />
    </IMG_CONTAINER>
  );
}

export default Hero;
