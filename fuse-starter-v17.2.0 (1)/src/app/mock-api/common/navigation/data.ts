/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    // {
    //     id      : 'apps',
    //     title   : 'Trang chủ',
    //     subtitle: '',
    //     type    : 'group',
    //     icon    : 'heroicons_outline:home',
    //     children: [
    //         {
    //             id   : 'dash-board',
    //             title: 'Trang chủ',
    //             type : 'basic',
    //             icon : 'heroicons_outline:presentation-chart-bar',
    //             link : '/apps/dash-board'
    //         },
        
    //         {
    //             id   : 'reports',
    //             title: 'Dịch vụ',
    //             type : 'basic',
    //             icon : 'heroicons_outline:chart-pie',
    //             link : '/apps/reports'
    //         },

            
    //     ]
    // },
    
    // {
    //     id      : 'user-interface',
    //     title   : 'Thông tin',
    //     subtitle: '(Phương tiện , Kho bãi ga , Lịch , Tin Tức ...)',
    //     type    : 'group',
    //     icon    : 'heroicons_outline:collection',
    //     children: [

    //         {
    //             id   : 'user-interface.cards',
    //             title: 'Phương tiện',
    //             type : 'basic',
    //             icon : 'heroicons_outline:duplicate',
    //             link : '/ui/cards'
    //         },

    //         {
    //             id      : 'user-interface.forms',
    //             title   : 'Kho bãi ga',
    //             type    : 'collapsable',
    //             icon    : 'heroicons_outline:pencil-alt',
    //             children: [
    //                 {
    //                     id   : 'user-interface.forms.fields',
    //                     title: 'Fields',
    //                     type : 'basic',
    //                     link : '/ui/forms/fields'
    //                 },
    //                 {
    //                     id   : 'user-interface.forms.layouts',
    //                     title: 'Layouts',
    //                     type : 'basic',
    //                     link : '/ui/forms/layouts'
    //                 },
    //                 {
    //                     id   : 'user-interface.forms.wizards',
    //                     title: 'Wizards',
    //                     type : 'basic',
    //                     link : '/ui/forms/wizards'
    //                 }
    //             ]
    //         },
   

    //     ]
    // },

    // {
    //     id      : 'news',
    //     title   : 'Tin Tức',
    //     subtitle: '',
    //     type    : 'group',
    //     icon    : 'heroicons_outline:home',
    //     children: [
    //         {
    //             id   : 'dash-board',
    //             title: 'Tuyển dụng',
    //             type : 'basic',
    //             icon : 'heroicons_outline:presentation-chart-bar',
    //             link : '/apps/dash-board'
    //         },
        
    //         {
    //             id   : 'reports',
    //             title: 'Về công ty',
    //             type : 'basic',
    //             icon : 'heroicons_outline:chart-pie',
    //             link : '/apps/reports'
    //         },

            
    //     ]
    // },

    {
        id      : 'phone',
        title   : '012345678910',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:phone', // Giữ nguyên
    },
    {
        id      : 'welcome',
        title   : 'Giới thiệu',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:user-group', // Icon nhóm người, phù hợp cho phần giới thiệu
        link    : '/apps/dash-board'
    },
    {
        id      : 'services',
        title   : 'Dịch Vụ',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:cog', // Icon bánh răng, phù hợp cho dịch vụ
        link    : '/apps/dash-board/services'
    },
    {
        id      : 'solutions',
        title   : 'Giải pháp',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:light-bulb', // Icon bóng đèn, thể hiện ý tưởng & giải pháp
        link    : '/apps/dash-board/solutions'
    },
    {
        id      : 'news',
        title   : 'Tin Tức',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:newspaper', // Icon tờ báo, phù hợp cho tin tức
        link    : '/apps/dash-board/news'
    },
    {
        id      : 'hire',
        title   : 'Tuyển dụng',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:briefcase', // Icon cặp hồ sơ, phù hợp cho tuyển dụng
        link    : '/apps/dash-board/hire'
    },
    {
        id      : 'contact',
        title   : 'Liên Hệ',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:chat', // Icon chat, phù hợp cho liên hệ
        link    : '/apps/dash-board/contact'
    }
    
];
export const compactNavigation: FuseNavigationItem[] = [

    {
        id      : 'phone',
        title   : '012345678910',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:phone', // Giữ nguyên
    },
    {
        id      : 'welcome',
        title   : 'Giới thiệu',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:user-group', // Icon nhóm người, phù hợp cho phần giới thiệu
        link    : '/apps/dash-board'
    },
    {
        id      : 'services',
        title   : 'Dịch Vụ',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:cog', // Icon bánh răng, phù hợp cho dịch vụ
        link    : '/apps/dash-board/services'
    },
    {
        id      : 'solutions',
        title   : 'Giải pháp',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:light-bulb', // Icon bóng đèn, thể hiện ý tưởng & giải pháp
        link    : '/apps/dash-board/solutions'
    },
    {
        id      : 'news',
        title   : 'Tin Tức',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:newspaper', // Icon tờ báo, phù hợp cho tin tức
        link    : '/apps/dash-board/news'
    },
    {
        id      : 'hire',
        title   : 'Tuyển dụng',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:briefcase', // Icon cặp hồ sơ, phù hợp cho tuyển dụng
        link    : '/apps/dash-board/hire'
    },
    {
        id      : 'contact',
        title   : 'Liên Hệ',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:chat', // Icon chat, phù hợp cho liên hệ
        link    : '/apps/dash-board/contact'
    }
    
];
export const futuristicNavigation: FuseNavigationItem[] = [

    {
        id      : 'phone',
        title   : '012345678910',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:phone', // Giữ nguyên
    },
    {
        id      : 'welcome',
        title   : 'Giới thiệu',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:user-group', // Icon nhóm người, phù hợp cho phần giới thiệu
        link    : '/apps/dash-board'
    },
    {
        id      : 'services',
        title   : 'Dịch Vụ',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:cog', // Icon bánh răng, phù hợp cho dịch vụ
        link    : '/apps/dash-board/services'
    },
    {
        id      : 'solutions',
        title   : 'Giải pháp',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:light-bulb', // Icon bóng đèn, thể hiện ý tưởng & giải pháp
        link    : '/apps/dash-board/solutions'
    },
    {
        id      : 'news',
        title   : 'Tin Tức',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:newspaper', // Icon tờ báo, phù hợp cho tin tức
        link    : '/apps/dash-board/news'
    },
    {
        id      : 'hire',
        title   : 'Tuyển dụng',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:briefcase', // Icon cặp hồ sơ, phù hợp cho tuyển dụng
        link    : '/apps/dash-board/hire'
    },
    {
        id      : 'contact',
        title   : 'Liên Hệ',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:chat', // Icon chat, phù hợp cho liên hệ
        link    : '/apps/dash-board/contact'
    }
    
];
export const horizontalNavigation: FuseNavigationItem[] = [


    {
        id      : 'phone',
        title   : '012345678910',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:phone', // Giữ nguyên
    },
    {
        id      : 'welcome',
        title   : 'Giới thiệu',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:user-group', // Icon nhóm người, phù hợp cho phần giới thiệu
        link    : '/apps/dash-board'
    },
    {
        id      : 'services',
        title   : 'Dịch Vụ',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:cog', // Icon bánh răng, phù hợp cho dịch vụ
        link    : '/apps/dash-board/services'
    },
    {
        id      : 'solutions',
        title   : 'Giải pháp',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:light-bulb', // Icon bóng đèn, thể hiện ý tưởng & giải pháp
        link    : '/apps/dash-board/solutions'
    },
    {
        id      : 'news',
        title   : 'Tin Tức',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:newspaper', // Icon tờ báo, phù hợp cho tin tức
        link    : '/apps/dash-board/news'
    },
    {
        id      : 'hire',
        title   : 'Tuyển dụng',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:briefcase', // Icon cặp hồ sơ, phù hợp cho tuyển dụng
        link    : '/apps/dash-board/hire'
    },
    {
        id      : 'contact',
        title   : 'Liên Hệ',
        subtitle: '',
        type    : 'basic',
        icon    : 'heroicons_outline:chat', // Icon chat, phù hợp cho liên hệ
        link    : '/apps/dash-board/contact'
    }
    
];
