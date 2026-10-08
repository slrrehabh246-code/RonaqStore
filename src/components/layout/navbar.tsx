import { ShoppingBag, Search, User } from "lucide-react";
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold tracking-wider text-slate-900">
            RONAQ
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="/products" className="hover:text-slate-900 transition-colors">Products</a>
            <a href="/categories" className="hover:text-slate-900 transition-colors">Categories</a>
            <a href="/about" className="hover:text-slate-900 transition-colors">About</a>
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="h-9 w-9 p-0 text-slate-600">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="h-9 w-9 p-0 text-slate-600">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="relative flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <span>Cart</span>
            <span className="ml-1 rounded-full bg-slate-900 px-2 py-0.5 text-xs text-white">0</span>
          </Button>
        </div>
      </div>
    </header>
  );
}``