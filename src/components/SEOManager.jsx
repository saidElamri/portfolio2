import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SEOManager = ({ activeWindow }) => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        // Base title
        let title = "Said Elamri | AI Architect & Full Stack Engineer";

        // Dynamic title based on active window
        if (activeWindow) {
            switch (activeWindow) {
                case 'projects':
                    title = `${t('windows.projects')} | Said Elamri`;
                    break;
                case 'skills':
                    title = `${t('windows.skills')} | Said Elamri`;
                    break;
                case 'about':
                    title = `${t('windows.about')} | Said Elamri`;
                    break;
                case 'contact':
                    title = `${t('windows.contact')} | Said Elamri`;
                    break;
                case 'terminal':
                    title = "Terminal | SaidOS v2.0";
                    break;
                default:
                    title = "Said Elamri | Portfolio v2";
            }
        }

        document.title = title;

        // Meta Description update
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            const description = i18n.language === 'ar'
                ? "مهندس ذكاء اصطناعي ومطور شامل. متخصص في بناء تطبيقات ويب قابلة للتطوير ودمج الذكاء الاصطناعي."
                : i18n.language === 'fr'
                    ? "Architecte IA et Développeur Full Stack. Spécialisé dans la création d'applications web évolutives et l'intégration de l'IA."
                    : "AI Architect & Full Stack Engineer. Specializing in building scalable web applications and integrating AI into production systems.";

            metaDesc.setAttribute('content', description);
        }

        // HTML Lang attribute
        document.documentElement.lang = i18n.language;

    }, [activeWindow, i18n.language, t]);

    return null;
};

export default SEOManager;
