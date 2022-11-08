import styled from 'styled-components';
import * as React from 'react';
import { buildVariants } from '../../../libs/react-helpers/buildVariants';
import {
  ITagWithChildrenProperties,
  ReactHTMLAttributes,
} from '../../../libs/react-helpers/forwardProps/types';
import { forwardProps } from '../../../libs/react-helpers/forwardProps';
import { themes } from '../../../styles/themes';

interface ILabelProps
  extends ITagWithChildrenProperties<ReactHTMLAttributes<HTMLSpanElement>> {
  variant?: 'default' | 'Heading1';
}

const Span = styled.span<ILabelProps>((props) => {
  return buildVariants(props)
    .css({
      color: themes.white.colors.pds['tenb-colors-text-brand'],
    })
    .variant('variant', props.variant ?? 'default', {
      default: {},
      Heading1: {
        fontFamily: 'Impact',
        fontSize: '40px',
      },
    })
    .end();
});

const Label = React.forwardRef<HTMLSpanElement, ILabelProps>((props, ref) => {
  return (
    <Span ref={ref} {...forwardProps(props, ['variant'])}>
      {props.children}
    </Span>
  );
});

export default Label;
