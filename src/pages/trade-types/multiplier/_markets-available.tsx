import React from 'react'
import styled from 'styled-components'
import MarketsCarousel from '../components/_markets-carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import Forex from 'images/svg/trade-types/forex.svg'
import Derived from 'images/svg/trade-types/derived.svg'
import useRegion from 'components/hooks/use-region'

const MobileCardHeader = styled(Flex)`
    margin-bottom: 0.8rem;
    flex-direction: column;
    height: auto;

    @media (max-width: 680px) {
        > img {
            width: 48px;
            height: 48px;
            margin-bottom: 2rem;
        }
    }
`
const StyledText = styled(Text)`
    margin-top: 1.6rem;

    @media (max-width: 680px) {
        font-size: 18px;
        margin-top: 0;
    }
`
const available_markets = [
    {
        name: 'Forex',
        img_src: Forex,
        img_alt: 'forex',
        text: <Localize translate_text="Forex" />,
        description: (
            <Localize translate_text="Forex trading gives you the chance to profit from changes in the relative values of currencies on the forex market." />
        ),
        eu_description: (
            <Localize translate_text="Forex trading gives you the chance to profit from changes in the relative values of currencies on the forex market." />
        ),
        learn_more_path: '/markets/forex/',
    },
    {
        name: 'Derived',
        img_src: Derived,
        img_alt: 'derived',
        text: <Localize translate_text="Derived" />,
        description: (
            <Localize translate_text="_t_Enjoy trading a wide range of offerings that mimic characteristics of financial markets or are derived from them._t_" />
        ),
        eu_description: (
            <Localize translate_text="_t_Enjoy trading a wide range of offerings that mimic characteristics of financial markets._t_" />
        ),
        learn_more_path: '/markets/synthetic/',
    },
]

const eu_restricted_markets = ['Basket Indices']

const eu_available_markets = available_markets.filter(
    (el) => !eu_restricted_markets.includes(el.name),
)

const MarketsAvailable = () => {
    const { is_eu, is_row } = useRegion()
    return (
        <>
            <SectionContainer background="white" padding="8rem 0" position="relative">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" size="3.2rem" mb="2.4rem">
                        {localize('Markets available for multipliers trading')}
                    </Header>
                </SmallContainer>
                {/* TODO: refactor to make it more DRY */}
                {is_row && (
                    <>
                        <MarketsCarousel>
                            {available_markets.map((market) => {
                                return (
                                    <MarketsCarousel.Item key={market.name}>
                                        <MarketsItem>
                                            <Card>
                                                <MobileCardHeader>
                                                    <img
                                                        src={market.img_src}
                                                        alt={market.img_alt}
                                                        width="64"
                                                        height="64"
                                                    />

                                                    <StyledText weight="bold">
                                                        {market.text}
                                                    </StyledText>
                                                </MobileCardHeader>
                                                <Text>{market.description}</Text>
                                                <LearnMore
                                                    text={<Localize translate_text="Learn more" />}
                                                    to={market.learn_more_path}
                                                />
                                            </Card>
                                        </MarketsItem>
                                    </MarketsCarousel.Item>
                                )
                            })}
                        </MarketsCarousel>
                    </>
                )}

                {is_eu && (
                    <>
                        <MarketsCarousel>
                            {eu_available_markets.map((market) => {
                                return (
                                    <MarketsCarousel.Item key={market.name}>
                                        <MarketsItem>
                                            <Card>
                                                <MobileCardHeader>
                                                    <img
                                                        src={market.img_src}
                                                        alt={market.img_alt}
                                                        width="64"
                                                        height="64"
                                                    />

                                                    <StyledText weight="bold">
                                                        {market.text}
                                                    </StyledText>
                                                </MobileCardHeader>
                                                <Text>{market.eu_description}</Text>
                                                <LearnMore
                                                    text={<Localize translate_text="Learn more" />}
                                                    to={market.learn_more_path}
                                                />
                                            </Card>
                                        </MarketsItem>
                                    </MarketsCarousel.Item>
                                )
                            })}
                        </MarketsCarousel>
                    </>
                )}
            </SectionContainer>
        </>
    )
}

export default MarketsAvailable
