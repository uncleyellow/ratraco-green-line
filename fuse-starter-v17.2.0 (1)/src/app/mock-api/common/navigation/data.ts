/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'apps',
        title   : 'Applications',
        subtitle: 'Custom made application designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dash-board',
                title: 'Dash Board',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-bar',
                link : '/apps/dash-board'
            },
        
            {
                id   : 'reports',
                title: 'Báo cáo',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/apps/reports'
            },

            
        ]
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        subtitle: 'Building blocks of the UI & UX',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [

            {
                id   : 'user-interface.cards',
                title: 'Cards',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/ui/cards'
            },

            {
                id      : 'user-interface.forms',
                title   : 'Forms',
                type    : 'collapsable',
                icon    : 'heroicons_outline:pencil-alt',
                children: [
                    {
                        id   : 'user-interface.forms.fields',
                        title: 'Fields',
                        type : 'basic',
                        link : '/ui/forms/fields'
                    },
                    {
                        id   : 'user-interface.forms.layouts',
                        title: 'Layouts',
                        type : 'basic',
                        link : '/ui/forms/layouts'
                    },
                    {
                        id   : 'user-interface.forms.wizards',
                        title: 'Wizards',
                        type : 'basic',
                        link : '/ui/forms/wizards'
                    }
                ]
            },
   

        ]
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'apps',
        title   : 'Applications',
        subtitle: 'Custom made application designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dash-board',
                title: 'Dash Board',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-bar',
                link : '/apps/dash-board'
            },
        
            {
                id   : 'reports',
                title: 'Báo cáo',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/apps/reports'
            },
        ]
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        subtitle: 'Building blocks of the UI & UX',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [

            {
                id   : 'user-interface.cards',
                title: 'Cards',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/ui/cards'
            },

            {
                id      : 'user-interface.forms',
                title   : 'Forms',
                type    : 'collapsable',
                icon    : 'heroicons_outline:pencil-alt',
                children: [
                    {
                        id   : 'user-interface.forms.fields',
                        title: 'Fields',
                        type : 'basic',
                        link : '/ui/forms/fields'
                    },
                    {
                        id   : 'user-interface.forms.layouts',
                        title: 'Layouts',
                        type : 'basic',
                        link : '/ui/forms/layouts'
                    },
                    {
                        id   : 'user-interface.forms.wizards',
                        title: 'Wizards',
                        type : 'basic',
                        link : '/ui/forms/wizards'
                    }
                ]
            },
   

        ]
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'apps',
        title   : 'Applications',
        subtitle: 'Custom made application designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dash-board',
                title: 'Dash Board',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-bar',
                link : '/apps/dash-board'
            },
        
            {
                id   : 'reports',
                title: 'Báo cáo',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/apps/reports'
            },
        ]
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        subtitle: 'Building blocks of the UI & UX',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [

            {
                id   : 'user-interface.cards',
                title: 'Cards',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/ui/cards'
            },

            {
                id      : 'user-interface.forms',
                title   : 'Forms',
                type    : 'collapsable',
                icon    : 'heroicons_outline:pencil-alt',
                children: [
                    {
                        id   : 'user-interface.forms.fields',
                        title: 'Fields',
                        type : 'basic',
                        link : '/ui/forms/fields'
                    },
                    {
                        id   : 'user-interface.forms.layouts',
                        title: 'Layouts',
                        type : 'basic',
                        link : '/ui/forms/layouts'
                    },
                    {
                        id   : 'user-interface.forms.wizards',
                        title: 'Wizards',
                        type : 'basic',
                        link : '/ui/forms/wizards'
                    }
                ]
            },
   

        ]
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'apps',
        title   : 'Applications',
        subtitle: 'Custom made application designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dash-board',
                title: 'Dash Board',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-bar',
                link : '/apps/dash-board'
            },
        
            {
                id   : 'reports',
                title: 'Báo cáo',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/apps/reports'
            },
        ]
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        subtitle: 'Building blocks of the UI & UX',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [

            {
                id   : 'user-interface.cards',
                title: 'Cards',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/ui/cards'
            },

            {
                id      : 'user-interface.forms',
                title   : 'Forms',
                type    : 'collapsable',
                icon    : 'heroicons_outline:pencil-alt',
                children: [
                    {
                        id   : 'user-interface.forms.fields',
                        title: 'Fields',
                        type : 'basic',
                        link : '/ui/forms/fields'
                    },
                    {
                        id   : 'user-interface.forms.layouts',
                        title: 'Layouts',
                        type : 'basic',
                        link : '/ui/forms/layouts'
                    },
                    {
                        id   : 'user-interface.forms.wizards',
                        title: 'Wizards',
                        type : 'basic',
                        link : '/ui/forms/wizards'
                    }
                ]
            },
   

        ]
    },
];
