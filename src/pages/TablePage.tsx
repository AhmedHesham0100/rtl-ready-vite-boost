
import { useTranslation } from "react-i18next";
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
      <div className="flex justify-between items-center">
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
              <TableHead>{t('table.headers.id')}</TableHead>
              <TableHead>{t('table.headers.name')}</TableHead>
              <TableHead>{t('table.headers.email')}</TableHead>
              <TableHead>{t('table.headers.status')}</TableHead>
              <TableHead>{t('table.headers.role')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default TablePage;
