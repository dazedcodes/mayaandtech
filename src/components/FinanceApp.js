import React from 'react'
import PageHeader from './PageHeader'

export default function FinanceApp() {
    return (
        <div>
            <PageHeader
                title="Finance App"
                subtitle="FOR BUILDING SUSTAINABLE WEALTH"
                paragraph="Sign up here to be one of the first to know when the app releases on the App Store and Google Play! To protect the intellectual property my idea, the name of the app isn't open to the public just yet!"
            />
            <div>
                <h4>The Purpose Behind the Finance App</h4>
                <p>A <a src="https://www.pewresearch.org/fact-tank/2020/05/05/financial-and-health-impacts-of-covid-19-vary-widely-by-race-and-ethnicity/">Pew Research Center</a> survey in April 2020 found that 73% of Black adults do not have enough emergency savings to cover at least three months of emergency expenses. While I cannot speak on the experience of every Black American, I can say that at least in my household, this was not a topic I ever even heard of growing up. After exposure to financial literacy and practice implementing strategies in my own finance routine, I've seen the security that sustainably building financial wealth can bring. Thus, I am currently working on an app to help optimize my current finance routine and help other join my journey too! </p>
            </div>
        </div>
    )
}
