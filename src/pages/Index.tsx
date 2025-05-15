
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur z-10 px-4 py-3 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className={`text-xl font-bold ${currentLanguage.dir === 'rtl' ? 'ml-auto' : 'mr-auto'}`}>
            {currentLanguage.dir === 'rtl' ? 'تطبيق متعدد اللغات' : 'Multilingual App'}
          </h1>
          <LanguageSwitcher />
        </div>
      </header>
      
      <main className="container mx-auto pt-24 px-4 pb-16">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{currentLanguage.dir === 'rtl' ? 'مرحبا بالعالم!' : 'Hello World!'}</CardTitle>
            <CardDescription>
              {currentLanguage.dir === 'rtl' 
                ? 'هذا التطبيق يدعم اللغات من اليمين إلى اليسار (RTL) واللغات من اليسار إلى اليمين (LTR)' 
                : 'This app supports both RTL and LTR languages'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {currentLanguage.dir === 'rtl'
                ? 'يمكنك تبديل اللغة باستخدام محول اللغة في الزاوية العلوية اليمنى'
                : 'You can switch languages using the language switcher in the top right corner'}
            </p>
            <p>
              {currentLanguage.dir === 'rtl'
                ? 'تتكيف واجهة المستخدم تلقائيًا مع اتجاه اللغة'
                : 'The UI automatically adapts to language direction'}
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>
                {currentLanguage.dir === 'rtl' ? 'ميزة تخطيط RTL' : 'RTL Layout Feature'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {currentLanguage.dir === 'rtl'
                  ? 'يتم عكس جميع عناصر التخطيط تلقائيًا عند التبديل إلى لغة RTL'
                  : 'All layout elements automatically reverse when switching to an RTL language'}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>
                {currentLanguage.dir === 'rtl' ? 'دعم متعدد اللغات' : 'Multilingual Support'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {currentLanguage.dir === 'rtl'
                  ? 'يمكنك إضافة المزيد من اللغات بسهولة عن طريق تحديث سياق اللغة'
                  : 'You can easily add more languages by updating the language context'}
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
