import { useForm, FormProvider } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";

// Define the validation schema using Zod
const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address") // Email validation message
    .nonempty("Email is required"), // Ensure the email is not empty
  password: z
    .string()
    .min(6, "Password must be at least 6 characters") // Minimum length for password
    .nonempty("Password is required"), // Ensure the password is not empty
});

const Login = () => {
  // Initialize useForm hook with the Zod resolver for validation
  const methods = useForm({
    resolver: zodResolver(loginSchema), // Pass validation schema to react-hook-form
  });

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log(data); // Handle successful form submission
  };

  return (
    <Card className="max-w-md mx-auto shadow-xl rounded-lg bg-[#e7e7e7]">
      <CardHeader className="text-center py-6">
        <CardTitle className="text-2xl font-semibold text-gray-600 tracking-tight">
          Login
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Wrap form with FormProvider to pass context to nested components */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field} // Spread input props from react-hook-form
                      placeholder="Enter your email"
                      className="w-full p-4 rounded-lg bg-white text-gray-800 border-none shadow-md focus:ring-4 focus:ring-blue-300 transition duration-200 ease-in-out"
                    />
                  </FormControl>
                  {methods.formState.errors.email && (
                    <p className="text-red-400 text-sm mt-2">
                      {methods.formState.errors.email.message as string}
                    </p>
                  )}
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field} // Spread input props from react-hook-form
                      placeholder="Enter your password"
                      type="password"
                      className="w-full p-4 rounded-lg bg-white text-gray-800 border-none shadow-md focus:ring-4 focus:ring-blue-300 transition duration-200 ease-in-out"
                    />
                  </FormControl>
                  {methods.formState.errors.password && (
                    <p className="text-red-400 text-sm mt-2">
                      {methods.formState.errors.password.message as string}
                    </p>
                  )}
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button className=" rounded-md font-medium transition-all duration-300 w-full bg-[#1c1d21]">
              Login
            </Button>
          </form>
        </FormProvider>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-xs text-center ">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </CardFooter>
    </Card>
  );
};

export default Login;
