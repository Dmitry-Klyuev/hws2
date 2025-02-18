import React from 'react'
import s from './SuperSort.module.css'
import sortIcon from './icons/sort-up-and-down.png'
import sortUpIcon from './icons/upIcon.png'
import sortDownIcon from './icons/downIcon.png'

// icons
const downIcon = sortDownIcon
const upIcon = sortUpIcon
const noneIcon = sortIcon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') {
        return down
    }
    else if (sort === down) {
        return up
    }
    else if (sort === up) {
        return ''
    }
    else {
        return down
    }
    // sort: (click) => down (click) => up (click) => '' (click) => down ...
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                className={s.icon}
                alt='Sort icon'
            />
        </span>
    )
}

export default SuperSort