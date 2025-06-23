import { User, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<User[]> {
  // Aqui podes fazer fetch dos teus dados de uma API.
  // Por agora, vamos usar dados estáticos.
  return [
    {
      id: "728ed52f",
      name: "John Doe",
      email: "john.doe@example.com",
      status: "pending",
    },
    {
      id: "489e1d42",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "success",
    },
    {
        id: "a3b4c5d6",
        name: "Peter Jones",
        email: "peter.jones@example.com",
        status: "processing",
    },
    {
        id: "e7f8g9h0",
        name: "Mary Johnson",
        email: "mary.johnson@example.com",
        status: "failed",
    },
    {
        id: "i1j2k3l4",
        name: "David Williams",
        email: "david.williams@example.com",
        status: "success",
    },
    {
        id: "m5n6o7p8",
        name: "Sarah Brown",
        email: "sarah.brown@example.com",
        status: "pending",
    },
    {
        id: "q9r0s1t2",
        name: "Michael Davis",
        email: "michael.davis@example.com",
        status: "processing",
    },
    {
        id: "u3v4w5x6",
        name: "Emily Wilson",
        email: "emily.wilson@example.com",
        status: "success",
    },
    {
        id: "y7z8a9b0",
        name: "Chris Miller",
        email: "chris.miller@example.com",
        status: "failed",
    },
    {
        id: "c1d2e3f4",
        name: "Jessica Taylor",
        email: "jessica.taylor@example.com",
        status: "pending",
    }
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Utilizadores</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}