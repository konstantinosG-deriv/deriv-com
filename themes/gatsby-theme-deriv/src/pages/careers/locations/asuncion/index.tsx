import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { asuncion } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const query = graphql`
    query {
        living_in_asuncion: file(relativePath: { eq: "careers/living_in_asuncion.png" }) {
            ...fadeIn
        }
        asuncion_grid_1: file(relativePath: { eq: "careers/asuncion_grid_1.png" }) {
            ...fadeIn
        }
        asuncion_grid_2: file(relativePath: { eq: "careers/asuncion_grid_2.png" }) {
            ...fadeIn
        }
        asuncion_grid_3: file(relativePath: { eq: "careers/asuncion_grid_3.png" }) {
            ...fadeIn
        }
        asuncion_grid_4: file(relativePath: { eq: "careers/asuncion_grid_4.png" }) {
            ...fadeIn
        }
        map_asuncion: file(relativePath: { eq: "careers/maps/map-paraguay.png" }) {
            ...fadeIn
        }
        asuncion_great_place_to_work_badge: file(
            relativePath: { eq: "careers/asuncion_great_place_to_work_badge.png" }
        ) {
            ...fadeIn
        }
    }
`

const Asuncion = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <LocationLayout location={asuncion} images={images} />
        </Layout>
    )
}

export default WithIntl()(Asuncion)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Asunción | Our office – Paraguay | Deriv_t_"
        description="_t_Find your role with us by browsing Deriv job opportunities in Asunción, Paraguay._t_"
        pageContext={pageContext}
    />
)
