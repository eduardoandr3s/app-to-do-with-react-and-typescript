import { FOOTER_FILTERS_BUTTONS, TODO_FILTERS } from "../consts"
import { type FilterValue } from "../types"

interface Props {
    handleFilterChange: (filter: FilterValue) => void
    filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
}

export const Filters: React.FC<Props> = (
    {filterSelected, handleFilterChange}
) => {

    const handleClick = (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        handleFilterChange(filter)
      }

   return (
    <ul className="filters">
        {
            Object.entries(FOOTER_FILTERS_BUTTONS).map(([key, {href, literal}]) => {
                const isSelected = key === filterSelected
                const className = isSelected ? 'selected' : ''
                return (
                    <li key={key}>
                        <a href={href}
                        className={className}
                        onClick={handleClick(key as FilterValue)}
                        >
                            {literal}
                        </a>
                    </li>
                )
            })
        }
    </ul>
   )
}
