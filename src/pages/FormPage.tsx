
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const FormPage = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const isRTL = currentLanguage.dir === 'rtl';

  // Define form schema with Zod
  const formSchema = z.object({
    name: z.string().min(2, { message: t('form.validation.nameRequired') }),
    email: z.string().email({ message: t('form.validation.emailInvalid') }),
    message: z.string().min(10, { message: t('form.validation.messageLength') }),
  });

  // Form hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Form submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: t('form.toast.success'),
      description: t('form.toast.submitted'),
    });
    form.reset();
  }

  return (
    <div className="space-y-6">
      <h1 className={`text-2xl font-bold ${isRTL ? "text-right" : "text-left"}`}>{t('form.title')}</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className={isRTL ? "text-right" : "text-left"}>{t('form.contactForm')}</CardTitle>
          <CardDescription className={isRTL ? "text-right" : "text-left"}>{t('form.contactDescription')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className={isRTL ? "text-right" : "text-left"}>
                    <FormLabel>{t('form.fields.name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('form.placeholders.name')} {...field} />
                    </FormControl>
                    <FormDescription>{t('form.descriptions.name')}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className={isRTL ? "text-right" : "text-left"}>
                    <FormLabel>{t('form.fields.email')}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={t('form.placeholders.email')} {...field} />
                    </FormControl>
                    <FormDescription>{t('form.descriptions.email')}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className={isRTL ? "text-right" : "text-left"}>
                    <FormLabel>{t('form.fields.message')}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={t('form.placeholders.message')} {...field} />
                    </FormControl>
                    <FormDescription>{t('form.descriptions.message')}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className={`${isRTL ? "text-right" : "text-left"}`}>
                <Button type="submit">{t('form.submit')}</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormPage;
