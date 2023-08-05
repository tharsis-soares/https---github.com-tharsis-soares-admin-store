"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Dashboard",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Clientes",
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categorias",
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Tamanhos",
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Configurações",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
        <MenubarMenu>
          <Link href={`/${params.storeId}/`}>
            <MenubarTrigger>Dashboard</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-bold">Cadastros</MenubarTrigger>
          <MenubarContent>
            <Link href={`/${params.storeId}/billboards`}>
              <MenubarItem>Clientes</MenubarItem>
            </Link>
            <MenubarItem>Fornecedores</MenubarItem>
            <MenubarItem>Produtos/Serviços</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Cadastros Auxiliares</MenubarSubTrigger>

              <MenubarSubContent className="w-[230px]">
                <MenubarItem>Bancos</MenubarItem>
                <MenubarItem>Contas</MenubarItem>
                <MenubarItem>Plano de Contas</MenubarItem>
                <MenubarItem>Centro de Custo</MenubarItem>
                <MenubarItem>Operadoras Financeiras</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Em desenvolvimento</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="relative">Financeiro</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Contas a Receber</MenubarSubTrigger>
              <MenubarSubContent className="w-[230px]">
                <MenubarItem>
                  Inserir novo título
                </MenubarItem>
                <MenubarItem disabled>
                  Baixar título
                </MenubarItem>
                <MenubarItem>
                  Relatórios
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Contas a Pagar</MenubarSubTrigger>
              <MenubarSubContent className="w-[230px]">
                <MenubarItem>
                  Inserir novo título
                </MenubarItem>
                <MenubarItem disabled>
                  Baixar título
                </MenubarItem>
                <MenubarItem>
                  Relatórios
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Movimento Bancário</MenubarSubTrigger>
              <MenubarSubContent className="w-[230px]">
                <MenubarItem>
                  Lançamentos
                </MenubarItem>
                <MenubarItem>
                  Extrato
                </MenubarItem>
                <MenubarItem>
                  Conciliação
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>BPO</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Fluxo de Caixa</MenubarItem>
                <MenubarItem>DRE</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Planejamento Financeiro</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Acessórios</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Faturamento</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Vendas
            </MenubarItem>
            <MenubarItem disabled>
              CRM
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>
              Acessórios
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Estoque</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Entrada/Saída</MenubarCheckboxItem>
            <MenubarCheckboxItem>Almoxarifados</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              Relatórios
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hidden md:block">
            Contabilidade
          </MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarItem inset>Lançamentos</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Cadastros acessórios</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <Link href={`/${params.storeId}/settings`}>
              <MenubarTrigger>Configurações</MenubarTrigger>
            </Link>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
}
