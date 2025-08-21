import Image from 'next/image';
import React from 'react';

import iconLeft from '@/config/assets/svg/icon-left.svg';
import iconRight from '@/config/assets/svg/icon-right.svg';

import styles from './pager.module.css';

type Props = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pager = ({ totalPages, currentPage, onPageChange }:Props) => {
    const getPages = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (currentPage > 4) pages.push('...');
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            if (currentPage < totalPages - 3) pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    };

  const pages = getPages();

  return (
    <div className={ styles.pager }>
        <button
            className={ styles.pagerButton }
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
        >
            <Image  src={ iconLeft } alt={'Icon left'} />
        </button>

        {pages.map((page, idx) =>
            typeof page === 'number' ? (
            <button
                key={idx}
                onClick={() => onPageChange(page)}
                className={`${ styles.pagerItem } ${
                page === currentPage
                    ? `${ styles.pagerItemActive }`
                    : `${ styles.pagerItemHover }`
                }`}
            >
                {page}
            </button>
            ) : (
            <span key={idx} className={ styles.pagerPoints }>
                {page}
            </span>
            )
        )}

        <button
            className={ styles.pagerButton }
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
        >
            <Image  src={ iconRight } alt={'Icon right'} />
        </button>
    </div>
  );
};

export { Pager };
