import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";
import {
  VictoryArea,
  VictoryChart,
  VictoryPolarAxis,
  VictoryTheme
} from "victory";
import { useStores } from "../../../hooks/useStores";
import { buildVariants } from "../../../libs/react-helpers/buildVariants";
import ContainerFlex from "../../common/ContainerFlex";
import Label from "../../common/Label";
import { handleHeroOnLoad } from "../PageHeroes/handlers";

export interface IPageHeroDetailsProps {}

const StyledContainerFlex = styled(ContainerFlex)((props) => {
  return buildVariants(props).css({}).end();
});

const StyledDiv = styled.div((props) => {
  return buildVariants(props)
    .css({
      width: 300
    })
    .end();
});

/**
 * Heroe details page.
 */
const PageHeroDetails = (props: IPageHeroDetailsProps) => {
  const { storePageHeroDetails } = useStores();

  useEffect(() => {
    handleHeroOnLoad(storePageHeroDetails);
    return () => {
      storePageHeroDetails.reset();
    };
  }, [storePageHeroDetails]);

  return (
    <StyledContainerFlex
      name="HeroDetailsPage"
      flexDirection="column"
      flexGap="tenb-space-32"
      fullWidth
      fullHeight
    >
      <Label variant="Heading1">{storePageHeroDetails.hero?.name}</Label>
      <img
        style={{ width: "50px" }}
        src={storePageHeroDetails.hero?.images.xs}
      />

      <Label>Skills</Label>
      <StyledDiv>
        <VictoryChart polar theme={VictoryTheme.material}>
          <VictoryArea data={storePageHeroDetails.heroCharts} />
          <VictoryPolarAxis />
        </VictoryChart>
      </StyledDiv>
    </StyledContainerFlex>
  );
};

export default observer(PageHeroDetails);
