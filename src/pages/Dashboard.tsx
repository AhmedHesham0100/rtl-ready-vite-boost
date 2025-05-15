
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('dashboard.title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.cards.users')}</CardTitle>
            <CardDescription>{t('dashboard.cards.usersDescription')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">128</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.cards.revenue')}</CardTitle>
            <CardDescription>{t('dashboard.cards.revenueDescription')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$12,346</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.cards.activity')}</CardTitle>
            <CardDescription>{t('dashboard.cards.activityDescription')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">+24%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
