import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Button } from "../button/Button";

import flagSpain from '@/config/assets/svg/icon-flag-spain.svg';
import flagUsa from '@/config/assets/svg/icon-flag-eeu.svg';
import iconEarth from '@/config/assets/svg/icon-earth.svg';

const LanguageSwitcher = (): JSX.Element => {
    const { i18n } = useTranslation();
    const router = useRouter();
    const pathname = usePathname();
    const currentLanguage = i18n.language;

    const changeLanguage = (newLang: string) => {
        // i18n.changeLanguage(newLang);
        
        // Get path
        const segments = pathname.split('/');
        const isCurrentLangFirstSegment = ['en', 'es'].includes(segments[1]);
        const cleanPath = isCurrentLangFirstSegment 
            ? segments.slice(2).join('/') 
            : segments.slice(1).join('/');
        
        const newPath = `/${newLang}${cleanPath ? `/${cleanPath}` : ''}`;
        
        //Redirect
        window.location.href = newPath;
    };

    return (
        <Button 
            onClick={() => changeLanguage(currentLanguage === 'en' ? 'es' : 'en')}
            className="!w-fit !min-w-[110px]"
            text={currentLanguage === 'en' ? 'ES' : 'EN'}
            style="secondary"
            iconRight={currentLanguage === 'en' ? flagSpain : flagUsa}
            icon={iconEarth}
        />
    );
}

export { LanguageSwitcher };