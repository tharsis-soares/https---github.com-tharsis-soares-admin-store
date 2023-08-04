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
              <MenubarSubTrigger>New</MenubarSubTrigger>
              <MenubarSubContent className="w-[230px]">
                <MenubarItem>
                  Playlist <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>
                  Playlist from Selection <MenubarShortcut>⇧⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Smart Playlist... <MenubarShortcut>⌥⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Playlist Folder</MenubarItem>
                <MenubarItem disabled>Genius Playlist</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              Open Stream URL... <MenubarShortcut>⌘U</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Close Window <MenubarShortcut>⌘W</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Library</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Update Cloud Library</MenubarItem>
                <MenubarItem>Update Genius</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Organize Library...</MenubarItem>
                <MenubarItem>Export Library...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Import Playlist...</MenubarItem>
                <MenubarItem disabled>Export Playlist...</MenubarItem>
                <MenubarItem>Show Duplicate Items</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Get Album Artwork</MenubarItem>
                <MenubarItem disabled>Get Track Names</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              Import... <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>Burn Playlist to Disc...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Show in Finder <MenubarShortcut>⇧⌘R</MenubarShortcut>{" "}
            </MenubarItem>
            <MenubarItem>Convert</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Page Setup...</MenubarItem>
            <MenubarItem disabled>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Faturamento</MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>
              Cut <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Copy <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Paste <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Select All <MenubarShortcut>⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Deselect All <MenubarShortcut>⇧⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Smart Dictation...{" "}
              <MenubarShortcut>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                  <circle cx="17" cy="7" r="5" />
                </svg>
              </MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Emoji & Symbols{" "}
              <MenubarShortcut>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Estoque</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Show Lyrics</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset disabled>
              Show Status Bar
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
            <MenubarItem disabled inset>
              Enter Full Screen
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hidden md:block">
            Contabilidade
          </MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarLabel inset>Switch Account</MenubarLabel>
            <MenubarSeparator />
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Manage Famliy...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Account...</MenubarItem>
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
