import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

const AuthTabs = () => (
  <Tabs defaultValue="create-account" className="w-[400px]">
    <TabsList className="grid w-full grid-cols-2 mb-6 bg-[#e7e7e7]">
      <TabsTrigger value="create-account">Create Account</TabsTrigger>
      <TabsTrigger value="login">Login</TabsTrigger>
    </TabsList>
    <TabsContent value="create-account">
      <CreateAccount />
    </TabsContent>
    <TabsContent value="login">
      <Login />
    </TabsContent>
  </Tabs>
);

export default AuthTabs;
