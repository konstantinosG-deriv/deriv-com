import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { singapore } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const query = graphql`
    query {
        living_in_singapore: file(relativePath: { eq: "careers/living_in_singapore.png" }) {
            ...fadeIn
        }
        guernsey_grid_1: file(relativePath: { eq: "careers/guernsey_grid_1.jpg" }) {
            ...fadeIn
        }
        guernsey_grid_2: file(relativePath: { eq: "careers/guernsey_grid_2.jpg" }) {
            ...fadeIn
        }
        singapore_grid_3: file(relativePath: { eq: "careers/singapore_grid_3.png" }) {
            ...fadeIn
        }
        guernsey_grid_4: file(relativePath: { eq: "careers/guernsey_grid_4.jpg" }) {
            ...fadeIn
        }
        guernsey_map: file(relativePath: { eq: "maps/map-guernsey-career.jpg" }) {
            ...fadeIn
        }
    }
`

const Singapore = () => {
    const images = useStaticQuery<ImageDataLike>(query)

    return (
        <Layout type="careers">
            <NewLocationLayout location={singapore} images={images} />
        </Layout>
    )
}

export default WithIntl()(Singapore)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Singapore – Our office | Deriv_t_"
        description="_t_Join great trading minds at Deriv in Singapore and build your career in developing online trading solutions, particularly for CFD trading._t_"
        pageContext={pageContext}
    />
)
