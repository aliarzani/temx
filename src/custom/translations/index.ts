import { en } from '../../translations/en';
import { ru } from './ru';
import { fa } from './fa';


// tslint:disable:no-submodule-imports
import localeRu from 'react-intl/locale-data/ru';
import localeFa from 'react-intl/locale-data/fa';
// tslint:enable

export const customLocaleData = ([...localeRu, ...localeFa]);

export type LangType = typeof en;

export const customLanguageMap = {
    ru,
    fa,
};
