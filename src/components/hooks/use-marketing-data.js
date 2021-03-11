import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { isBrowser } from 'common/utility'

export const useMarketingData = () => {
    const [affiliate_token, setAffiliateToken] = useState(null)
    const [utm_data, setUtmData] = useState(null)
    // Extract from cookies
    const affiliate_token_cookie = Cookies.get('affiliate_token')
    const utm_data_cookie = Cookies.get('utm_data')
    // Extract from url params
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const affiliate_token_params = url_params.get('affiliate_token')
    const utm_data_params = url_params.get('utm_data')

    useEffect(() => {
        setAffiliateToken(affiliate_token_params ?? affiliate_token_cookie ?? null)
        setUtmData(utm_data_params ?? utm_data_cookie ?? null)
    }, [url_params])

    return [affiliate_token, utm_data]
}
