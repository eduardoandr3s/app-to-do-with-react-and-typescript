export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed',
} as const /* para que typescript sepa que es una constante y es de solo lectura*/

export const FOOTER_FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        literal: 'All',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Active',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
        literal: 'Completed',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    }
} as const


