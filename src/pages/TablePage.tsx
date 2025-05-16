
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const TablePage = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const isRTL = currentLanguage.dir === 'rtl';
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Inactive", role: "User" },
    { id: 4, name: "Alice Williams", email: "alice@example.com", status: "Active", role: "Editor" },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com", status: "Pending", role: "User" },
  ];

  // Filter data based on search term
  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className={`flex ${isRTL ? 'flex-row-reverse' : ''} justify-between items-center`}>
        <h1 className="text-2xl font-bold">{t('table.title')}</h1>
        <Input
          className="max-w-sm"
          placeholder={t('table.search')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Card>
        <Table>
          <TableCaption>{t('table.caption')}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className={isRTL ? "text-right" : "text-left"}>{t('table.headers.id')}</TableHead>
              <TableHead className={isRTL ? "text-right" : "text-left"}>{t('table.headers.name')}</TableHead>
              <TableHead className={isRTL ? "text-right" : "text-left"}>{t('table.headers.email')}</TableHead>
              <TableHead className={isRTL ? "text-right" : "text-left"}>{t('table.headers.status')}</TableHead>
              <TableHead className={isRTL ? "text-right" : "text-left"}>{t('table.headers.role')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className={isRTL ? "text-right" : ""}>{item.id}</TableCell>
                <TableCell className={isRTL ? "text-right" : ""}>{item.name}</TableCell>
                <TableCell className={isRTL ? "text-right" : ""}>{item.email}</TableCell>
                <TableCell className={isRTL ? "text-right" : ""}>{item.status}</TableCell>
                <TableCell className={isRTL ? "text-right" : ""}>{item.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default TablePage;
