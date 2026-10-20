import en from './en';
import ru from './ru';
import az from './az';

export const languages = ['en', 'ru', 'az'] as const;
export type Lang = (typeof languages)[number];

export const dictionaries = { en, ru, az };

export const ogLocales: Record<Lang, string> = { en: 'en_US', ru: 'ru_RU', az: 'az_AZ' };
