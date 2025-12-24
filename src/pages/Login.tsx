import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Login() {
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="flex w-full flex-col justify-center px-8 py-12 lg:w-1/2 lg:px-16">
        <Link to="/" className="mb-8 inline-block">
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-semibold tracking-wide text-heritage-green">
              Heritage
            </span>
            <span className="text-xs tracking-[0.2em] text-muted-foreground">
              Home Art
            </span>
          </div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="login" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-8">
              <h1 className="font-heading text-2xl font-semibold">
                Welcome Back
              </h1>
              <p className="mt-2 text-muted-foreground">
                Sign in to your account to continue shopping
              </p>

              <form className="mt-8 space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded border-border" />
                    Remember me
                  </label>
                  <a
                    href="#"
                    className="text-sm text-heritage-green hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-heritage-green text-heritage-cream hover:bg-heritage-green-light"
                >
                  Sign In
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="mt-8">
              <h1 className="font-heading text-2xl font-semibold">
                Create Account
              </h1>
              <p className="mt-2 text-muted-foreground">
                Register to start shopping our exclusive collection
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      First Name
                    </label>
                    <Input placeholder="Enter first name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Last Name
                    </label>
                    <Input placeholder="Enter last name" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+965" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      required
                      className="rounded border-border"
                    />
                    I agree to the{' '}
                    <a href="#" className="text-heritage-green hover:underline">
                      Terms & Conditions
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-heritage-green text-heritage-cream hover:bg-heritage-green-light"
                >
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden bg-heritage-charcoal lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <div className="max-w-md p-12 text-center">
          <h2 className="font-heading text-3xl font-semibold text-heritage-gold">
            Discover Timeless Elegance
          </h2>
          <p className="mt-4 text-heritage-cream/70">
            Join our community of art lovers and bring the beauty of authentic
            Indian craftsmanship to your home.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="h-2 w-2 rounded-full bg-heritage-gold" />
            <div className="h-2 w-2 rounded-full bg-heritage-gold/50" />
            <div className="h-2 w-2 rounded-full bg-heritage-gold/50" />
          </div>
        </div>
      </div>
    </div>
  );
}
