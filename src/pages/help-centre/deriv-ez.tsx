import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import deriv_ez from './data/_deriv-ez'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import useRegion from 'components/hooks/use-region'
import PageNotFound from 'features/pages/404'

const DerivEZ = () => {
    const is_eu = useRegion()

    return !is_eu ? <QuestionsTemplate data={deriv_ez} /> : <PageNotFound />
}
export default WithIntl()(DerivEZ)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Deriv EZ | Deriv_t_"
        description="_t_Frequently asked questions - Deriv EZ_t_"
        pageContext={pageContext}
    />
)
