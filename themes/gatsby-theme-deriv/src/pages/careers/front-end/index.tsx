import React from 'react'
import DepartmentPage from '../_dept-layout-components/_department-page'
import career_data from '../data/_career-data'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const Career2 = () => {
    return <DepartmentPage data={career_data.front_end[0]} />
}

export default WithIntl()(Career2)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="Deriv Careers | Front-end development jobs"
        description="See job vacancies in Deriv’s Front-end development team. Join and grow with us."
        pageContext={pageContext}
    />
)
