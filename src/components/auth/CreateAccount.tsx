import { useForm, FormProvider } from "react-hook-form"; // React Hook Form for form management
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
const createAccountSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});

const CreateAccount = () => {
  // Initialize useForm hook with the Zod resolver for validation
  const methods = useForm({
    resolver: zodResolver(createAccountSchema), // Pass validation schema to react-hook-form
  });

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Card className="max-w-md mx-auto shadow-xl rounded-lg bg-[#e7e7e7]">
      <CardHeader className="text-center py-6">
        <CardTitle className="text-xl font-semibold text-gray-600 tracking-tight">
          Create an Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Wrap form with FormProvider to pass context to nested components */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your full name"
                      className="w-full p-4 rounded-lg bg-white text-gray-800 border-none shadow-md focus:ring-4 focus:ring-green-300 transition duration-200 ease-in-out"
                    />
                  </FormControl>
                  {methods.formState.errors.name && (
                    <p className="text-red-400 text-xs mt-1">
                      {methods.formState.errors.name.message as string}
                    </p>
                  )}
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      className="w-full p-4 rounded-lg bg-white text-gray-800 border-none shadow-md focus:ring-4 focus:ring-green-300 transition duration-200 ease-in-out"
                    />
                  </FormControl>
                  {methods.formState.errors.email && (
                    <p className="text-red-400 text-xs mt-1">
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
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      className="w-full p-4 rounded-lg bg-white text-gray-800 border-none shadow-md focus:ring-4 focus:ring-green-300 transition duration-200 ease-in-out"
                    />
                  </FormControl>
                  {methods.formState.errors.password && (
                    <p className="text-red-400 text-xs mt-1">
                      {methods.formState.errors.password.message as string}
                    </p>
                  )}
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="rounded-md font-medium transition-all duration-300 w-full bg-[#1c1d21] "
            >
              Create Account
            </Button>
          </form>
        </FormProvider>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-xs text-center">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </CardFooter>
    </Card>
  );
};

export default CreateAccount;
