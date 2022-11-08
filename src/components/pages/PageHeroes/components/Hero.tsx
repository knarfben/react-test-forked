import styled from 'styled-components';
import { useUrlBuilder } from '../../../../hooks/useUrlBuilder';
import { buildVariants } from '../../../../libs/react-helpers/buildVariants';
import { ITagProperties } from '../../../../libs/react-helpers/forwardProps/types';
import IHero from '../../../../models/hero.model';
import { handleShowHeroDetailsOnClick } from '../handlers';

export interface IHeroProps extends ITagProperties<HTMLTableRowElement> {
  hero: IHero;
}

const IMG = styled.img((props) => {
  return buildVariants(props)
    .css({
      maxWidth: '100%',
      maxHeight: '100%',
      display: 'block',
      borderRadius: '1px',
    })
    .css({
      ':hover': {
        // border: 'solid 1px #a8a64d',
      },
    })
    .end();
});

const IMG_CONTAINER = styled.div((props) => {
  return buildVariants(props)
    .css({
      height: '48px',
      width: '32px',
      borderRadius: '1px',
    })
    .css({
      '@keyframes scale-easeInElastic': {
        '0%': {
          transform: 'scale(1)',
        },

        '4%': {
          transform: 'scale(1)',
        },

        '8%': {
          transform: 'scale(1)',
        },

        '14%': {
          transform: 'scale(1)',
        },

        '18%': {
          transform: 'scale(1)',
        },

        '26%': {
          transform: 'scale(1.01)',
        },

        '28%': {
          transform: 'scale(1.01)',
        },

        '40%': {
          transform: 'scale(0.98)',
        },

        '42%': {
          transform: 'scale(0.98)',
        },

        '56%': {
          transform: 'scale(1.05)',
        },

        '58%': {
          transform: 'scale(1.04)',
        },

        '72%': {
          transform: 'scale(3)',
        },

        '86%': {
          transform: 'scale(6)',
        },

        '100%': {
          transform: 'scale(5)',
        },
      },
    })
    .css({
      ': hover': {
        cursor: 'pointer',
        transform: 'scale(5)',
        transition: 'transform 500ms ease-in-out',
        // transitionDelay: '100ms',
        lineHeight: '0',
        backgroundColor: '#fff',
        boxShadow: '0 0 2px 1px #fff, 0 0 3px 2px #00a0ff54, 0 0 4px 3px #0bf',
      },
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
      // style={{ backgroundImage: `url(${props.hero.images.sm})` }}
      onClick={handleShowHeroDetailsOnClick(urlBuilder)(props.hero)}
    >
      <IMG alt={props.hero.name} src={props.hero.images.sm} />
    </IMG_CONTAINER>
  );
}

export default Hero;
