import React from 'react'
import styled from 'styled-components'
import derivTraderLogo from '../../images/common/dtrader/dtrader.svg'
import GrayAngle30 from '../../images/common/gray-angle.png'
import GetAppMobileBG from '../../images/common/dtrader/getAppMobileBG.jpg'
import CommonHeaderSection from 'components/elements/common-header-section'
import MultiWidthColumn from 'components/elements/multi-width-column'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import Button from 'components/custom/_button'
import { useIsRtl } from 'components/hooks/use-isrtl'
import device from 'themes/device'
import { handleGetTrading } from 'components/custom/utils'
import useBreakpoints from 'components/hooks/use-breakpoints'

const ContentWrapper = styled.div<{ is_rtl: boolean }>`
    display: flex;
    gap: 28px;
    flex: 1;
    z-index: 2;
    direction: ${(props) => (props.is_rtl ? 'rtl' : 'ltr')};
    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const CreateAccountButton = styled(Button)`
    @media ${device.tablet} {
        max-width: 100%;
        width: 100%;
    }
`
const TextAndButtonWrapper = styled.div`
    @media ${device.tabletL} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const DtraderGetApp = () => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()
    const is_rtl = useIsRtl()

    return (
        <MultiWidthColumn
            firstColumnBackground="#4C515C"
            secondColumnBackground={GrayAngle30}
            firstColumnWidth="88%"
            secondColumnWidth="22%"
            mobileBackgroundImage={GetAppMobileBG}
        >
            <ContentWrapper is_rtl={is_rtl}>
                <img src={derivTraderLogo} alt="dtrader logo" width="64px" height="64px" />
                <TextAndButtonWrapper>
                    <CommonHeaderSection
                        title="_t_Get into the Deriv Trader experience_t_"
                        title_font_size={is_mobile_or_tablet ? '32px' : '64px'}
                        align_title={is_mobile_or_tablet ? 'center' : is_rtl ? 'right' : 'left'}
                        width="100%"
                        font_family_title="Ubuntu"
                        color="#fff"
                        margin_title="0 0 18px"
                    />
                    {is_logged_in ? (
                        <CreateAccountButton
                            onClick={handleGetTrading}
                            label="_t_Get Trading_t_"
                            primary
                        />
                    ) : (
                        <CreateAccountButton
                            onClick={handleSignup}
                            label="_t_Create free demo account_t_"
                            primary
                        />
                    )}
                </TextAndButtonWrapper>
            </ContentWrapper>
            <div></div>
        </MultiWidthColumn>
    )
}

export default DtraderGetApp
