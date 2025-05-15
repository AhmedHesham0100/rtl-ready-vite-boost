
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur z-10 px-4 py-3 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className={`text-xl font-bold ${currentLanguage.dir === 'rtl' ? 'ml-auto' : 'mr-auto'}`}>
            {t('app.title')}
          </h1>
          <LanguageSwitcher />
        </div>
      </header>
      
      <main className="container mx-auto pt-24 px-4 pb-16">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{t('app.header')}</CardTitle>
            <CardDescription>
              {t('app.description')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {t('app.switchInstructions')}
            </p>
            <p>
              {t('app.adaptiveUI')}
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>
                {t('features.rtlLayout')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {t('features.rtlDescription')}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>
                {t('features.multilingualSupport')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {t('features.multilingualDescription')}
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
