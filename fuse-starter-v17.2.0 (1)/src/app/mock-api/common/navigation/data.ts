/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'apps',
        title   : 'Trang chủ',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dash-board',
                title: 'Trang chủ',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-bar',
                link : '/apps/dash-board'
            },
        
            {
                id   : 'reports',
                title: 'Dịch vụ',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/apps/reports'
            },

            
        ]
    },
    
    {
        id      : 'user-interface',
        title   : 'Thông tin',
        subtitle: '(Phương tiện , Kho bãi ga , Lịch , Tin Tức ...)',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [

            {
                id   : 'user-interface.cards',
                title: 'Phương tiện',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/ui/cards'
            },

            {
                id      : 'user-interface.forms',
                title   : 'Kho bãi ga',
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

    {
        id      : 'news',
        title   : 'Tin Tức',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dash-board',
                title: 'Tuyển dụng',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-bar',
                link : '/apps/dash-board'
            },
        
            {
                id   : 'reports',
                title: 'Về công ty',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/apps/reports'
            },

            
        ]
    },

    {
        id      : 'contact',
        title   : 'Liên hệ',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/apps/dash-board'
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'apps',
        title   : 'Trang chủ',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dash-board',
                title: 'Trang chủ',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-bar',
                link : '/apps/dash-board'
            },
        
            {
                id   : 'reports',
                title: 'Dịch vụ',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/apps/reports'
            },

            
        ]
    },
    
    {
        id      : 'user-interface',
        title   : 'Thông tin',
        subtitle: '(Phương tiện , Kho bãi ga , Lịch , Tin Tức ...)',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [

            {
                id   : 'user-interface.cards',
                title: 'Phương tiện',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/ui/cards'
            },

            {
                id      : 'user-interface.forms',
                title   : 'Kho bãi ga',
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

    {
        id      : 'news',
        title   : 'Tin Tức',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dash-board',
                title: 'Tuyển dụng',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-bar',
                link : '/apps/dash-board'
            },
        
            {
                id   : 'reports',
                title: 'Về công ty',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/apps/reports'
            },

            
        ]
    },

    {
        id      : 'contact',
        title   : 'Liên hệ',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/apps/dash-board'
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'apps',
        title   : 'Trang chủ',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dash-board',
                title: 'Trang chủ',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-bar',
                link : '/apps/dash-board'
            },
        
            {
                id   : 'reports',
                title: 'Dịch vụ',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/apps/reports'
            },

            
        ]
    },
    
    {
        id      : 'user-interface',
        title   : 'Thông tin',
        subtitle: '(Phương tiện , Kho bãi ga , Lịch , Tin Tức ...)',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [

            {
                id   : 'user-interface.cards',
                title: 'Phương tiện',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/ui/cards'
            },

            {
                id      : 'user-interface.forms',
                title   : 'Kho bãi ga',
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

    {
        id      : 'news',
        title   : 'Tin Tức',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dash-board',
                title: 'Tuyển dụng',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-bar',
                link : '/apps/dash-board'
            },
        
            {
                id   : 'reports',
                title: 'Về công ty',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/apps/reports'
            },

            
        ]
    },

    {
        id      : 'contact',
        title   : 'Liên hệ',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/apps/dash-board'
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'apps',
        title   : 'Trang chủ',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dash-board',
                title: 'Trang chủ',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-bar',
                link : '/apps/dash-board'
            },
        
            {
                id   : 'reports',
                title: 'Dịch vụ',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/apps/reports'
            },

            
        ]
    },
    
    {
        id      : 'user-interface',
        title   : 'Thông tin',
        subtitle: '(Phương tiện , Kho bãi ga , Lịch , Tin Tức ...)',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [

            {
                id   : 'user-interface.cards',
                title: 'Phương tiện',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/ui/cards'
            },

            {
                id      : 'user-interface.forms',
                title   : 'Kho bãi ga',
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

    {
        id      : 'news',
        title   : 'Tin Tức',
        subtitle: '',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dash-board',
                title: 'Tuyển dụng',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-bar',
                link : '/apps/dash-board'
            },
        
            {
                id   : 'reports',
                title: 'Về công ty',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/apps/reports'
            },

            
        ]
    },

    {
        id      : 'contact',
        title   : 'Liên hệ',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/apps/dash-board'
    },
];
