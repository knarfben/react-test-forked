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

const TR = styled.tr((props) => {
  return buildVariants(props).css({}).end();
});

const TD = styled.td((props) => {
  return buildVariants(props)
    .css({
      paddingRight: themes.white.sizes['tenb-space-8'],
    })
    .end();
});

/**
 * Dashboard page.
 */
export function Hero(props: IHeroProps) {
  const { urlBuilder } = useUrlBuilder();

  return (
    <TR onClick={handleShowHeroDetailsOnClick(urlBuilder)(props.hero)}>
      <TD>{props.hero.name}</TD>
      <TD>{props.hero.biography.publisher}</TD>
      <td>
        <img src={props.hero.images.xs} />
      </td>
    </TR>
  );
}

export default Hero;
