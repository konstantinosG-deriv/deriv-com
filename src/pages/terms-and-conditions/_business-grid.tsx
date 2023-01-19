import React from 'react'
import { StyledGrid, StyledContainer, IconWrapper, GridCol, Cta } from './_terms-conditions-style'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import { getLanguage } from 'common/utility'
// Icons
import General from 'images/svg/terms/business-general-tc.svg'
import Partners from 'images/svg/terms/business-partners-tc.svg'
import PA from 'images/svg/terms/business-pa-tc.svg'
import API from 'images/svg/terms/business-api-tc.svg'
import BugBounty from 'images/svg/terms/bug-bounty.svg'
import PDF from 'images/svg/regulatory/pdf-icon-black.svg'
import useRegion from 'components/hooks/use-region'

type ColProps = {
    Icon: string
    content: string
    title: string
    link_title: string
    url: string | (() => void)
}

const Col = ({ Icon, content, link_title, title, url }: ColProps) => (
    <GridCol>
        <IconWrapper>
            <img src={Icon} alt={title} />
        </IconWrapper>
        <Header as="h4" type="sub-section-title">
            {title}
        </Header>
        <Text lh="1.55">{content}</Text>
        <Cta>
            <img src={PDF} alt="pdf icon black" />
            <a href={url} target="_blank" rel="noopener noreferrer">
                {link_title}
            </a>
        </Cta>
    </GridCol>
)

const PaymentAgentsPdf = () => {
    const language = getLanguage()
    const supported_languages = ['fr', 'id', 'pt', 'ru', 'es', 'vt']
    const pdf_lang = supported_languages.includes(language) ? language : 'english'
    const url = `/tnc/business-partners-affiliates-and-introducing-brokers-${pdf_lang}.pdf`
    return (
        <Col
            Icon={PA}
            title={localize('Payment agents')}
            content={localize('Additional terms for our payment agents')}
            url={url}
            link_title={localize('Payment agents')}
        />
    )
}

const BusinessGrid = () => {
    const { is_row } = useRegion()
    return (
        <StyledContainer>
            <StyledGrid
                columns="repeat(3, 1fr)"
                column_gap="15.4rem"
                row_gap="8rem"
                tablet_columns="repeat(2, 1fr)"
                mobile_columns="1fr"
                mobile_row_gap="10rem"
            >
                <Col
                    Icon={General}
                    title={localize('General terms of use')}
                    content={localize(
                        'Terms and ethical standards for all our affiliates, introducing brokers, API users, and payment agents',
                    )}
                    url="/tnc/business-partners-general-terms.pdf"
                    link_title={localize('General terms of use')}
                />
                <Col
                    Icon={Partners}
                    title={localize('Affiliates & introducing brokers (IBs)')}
                    content={localize(
                        'Additional terms for our affiliates and introducing brokers',
                    )}
                    url="/tnc/business-partners-affiliates-and-introducing-brokers.pdf"
                    link_title={localize('Affiliates & introducing brokers (IBs)')}
                />
                {is_row && <PaymentAgentsPdf />}
                <Col
                    Icon={API}
                    title={localize('API users')}
                    content={localize('Additional terms for our API users')}
                    url="/tnc/business-partners-api-user.pdf"
                    link_title={localize('API users')}
                />
                <Col
                    Icon={BugBounty}
                    title={localize('Bug Bounty Program')}
                    content={localize(
                        'Additional terms for participants in our Bug Bounty Program',
                    )}
                    url="/tnc/business-partners-bug-bounty.pdf"
                    link_title={localize('Bug Bounty Program')}
                />
            </StyledGrid>
        </StyledContainer>
    )
}
export default BusinessGrid
