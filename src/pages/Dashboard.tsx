
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const isRTL = currentLanguage.dir === 'rtl';

  return (
    <div className="space-y-6">
      <h1 className={`text-2xl font-bold ${isRTL ? "text-right" : "text-left"}`}>{t('dashboard.title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className={isRTL ? "text-right" : "text-left"}>{t('dashboard.cards.users')}</CardTitle>
            <CardDescription className={isRTL ? "text-right" : "text-left"}>{t('dashboard.cards.usersDescription')}</CardDescription>
          </CardHeader>
          <CardContent className={isRTL ? "text-right" : "text-left"}>
            <p className="text-3xl font-bold">128</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className={isRTL ? "text-right" : "text-left"}>{t('dashboard.cards.revenue')}</CardTitle>
            <CardDescription className={isRTL ? "text-right" : "text-left"}>{t('dashboard.cards.revenueDescription')}</CardDescription>
          </CardHeader>
          <CardContent className={isRTL ? "text-right" : "text-left"}>
            <p className="text-3xl font-bold">$12,346</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className={isRTL ? "text-right" : "text-left"}>{t('dashboard.cards.activity')}</CardTitle>
            <CardDescription className={isRTL ? "text-right" : "text-left"}>{t('dashboard.cards.activityDescription')}</CardDescription>
          </CardHeader>
          <CardContent className={isRTL ? "text-right" : "text-left"}>
            <p className="text-3xl font-bold">+24%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
