import React from 'react';

import AppLauncher from '@salesforce/design-system-react/components/app-launcher';
import AppLauncherLink from '@salesforce/design-system-react/components/app-launcher/link';
import AppLauncherTile from '@salesforce/design-system-react/components/app-launcher/tile';
import AppLauncherExpandableSection from '@salesforce/design-system-react/components/app-launcher/expandable-section';

import GlobalNavigationBar from '@salesforce/design-system-react/components/global-navigation-bar';
import GlobalNavigationBarRegion from '@salesforce/design-system-react/components/global-navigation-bar/region';

import Button from '@salesforce/design-system-react/components/button';
import Search from '@salesforce/design-system-react/components/input/search';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';

class MyAppLauncher extends React.Component {
    static displayName = 'BLT Buddy';

    state = {
        search: '',
    };

    onSearch = (event) => {
        this.setState({ search: event.target.value });
    };

    render() {
        const search = (
            <Search
                onChange={(event) => {
                    console.log('Search term:', event.target.value);
                    this.onSearch(event);
                }}
                placeholder="Find an app"
                assistiveText={{ label: 'Find an app' }}
            />
        );
        const headerButton = <Button label="App Exchange" />;

        return (
            <IconSettings iconPath="/assets/icons">
                <GlobalNavigationBar>
                    <GlobalNavigationBarRegion region="primary">
                        <AppLauncher
                            triggerName={MyAppLauncher.displayName}
                            search={search}
                            modalHeaderButton={headerButton}
                        >
                            <AppLauncherExpandableSection title="Tile Section">
                                <AppLauncherTile
                                    description="The primary internal Salesforce org. Used to run our online sales business and manage accounts."
                                    iconText="SC"
                                    search={this.state.search}
                                    title="Sales Cloud"
                                />
                                <AppLauncherTile
                                    description="Salesforce Marketing Cloud lets businesses of any size engage with their customers through multiple channels of messaging."
                                    iconBackgroundColor="#e0cf76"
                                    iconText="MC"
                                    search={this.state.search}
                                    title="Marketing Cloud"
                                />
                                <AppLauncherTile
                                    description="Community for managing employee benefits and time off."
                                    iconBackgroundColor="#6a8adc"
                                    iconText="HR"
                                    search={this.state.search}
                                    title="HR Concierge"
                                />
                                <AppLauncherTile
                                    description="Manage your finances across multiple financial platforms and make the most of your capital."
                                    iconBackgroundColor="#73c07b"
                                    iconText="MM"
                                    search={this.state.search}
                                    title="My Money"
                                />
                                <AppLauncherTile
                                    description="The key to call center and contact center management is more simple than you think with this amazing application!"
                                    iconBackgroundColor="#b67e6a"
                                    iconText="CC"
                                    search={this.state.search}
                                    title="Call Center"
                                />
                                <AppLauncherTile
                                    description="Areas of Focus are used to track customer support for your brand and ensure high quality support"
                                    iconBackgroundColor="#69bad0"
                                    iconText="CS"
                                    search={this.state.search}
                                    title="Customer Support Community"
                                />
                            </AppLauncherExpandableSection>
                            <hr />
                            <AppLauncherExpandableSection title="All Items">
                                <AppLauncherLink search={this.state.search}>
                                    Accounts
                                </AppLauncherLink>
                                <AppLauncherLink search={this.state.search}>
                                    Announcements
                                </AppLauncherLink>
                                <AppLauncherLink search={this.state.search}>
                                    Approvals
                                </AppLauncherLink>
                                <AppLauncherLink search={this.state.search}>
                                    Campaigns
                                </AppLauncherLink>
                                <AppLauncherLink search={this.state.search}>
                                    Cases
                                </AppLauncherLink>
                                <AppLauncherLink search={this.state.search}>
                                    Coaching
                                </AppLauncherLink>
                                <AppLauncherLink search={this.state.search}>
                                    Contacts
                                </AppLauncherLink>
                            </AppLauncherExpandableSection>
                        </AppLauncher>
                    </GlobalNavigationBarRegion>
                </GlobalNavigationBar>
            </IconSettings>
        );
    }
}

export default MyAppLauncher;

// ReactDOM.render(<Example />, mountNode);