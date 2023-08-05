"use client"

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CategoryColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

interface CategoriesClientProps {
    data: CategoryColumn[]
}
export const CategoryClient: React.FC<CategoriesClientProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()

    return (
        <> 
            <div className="flex items-center justify-between">
                <Heading
                    title={`Categorias (${data.length})`}
                    description="Gerencie as categorias da sua empresa"
                />
                <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Nova categoria
                </Button>
            </div>
            <Separator />
            <DataTable  columns={columns} data={data} searchKey="name" />
            <Heading title="API" description="API for calls" />
            <Separator />
            <ApiList entityName="categories" entityIdName="categoryId" />
        </>
    )


}