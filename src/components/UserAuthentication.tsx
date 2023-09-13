import React, {useState} from 'react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from 'react-router-dom';

export const UserAuthentication: React.FC = () =>  {
    const { toast } = useToast()
    const navigate = useNavigate()

    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const onclickSignupButton = () => {
        if (signupEmail && signupPassword) {
            // Perform signup logic here
            toast({
                title:"Signup Successful",
                description: "You can login now",
            });
        } else {
            // Display an error message if email or password is missing
            toast({
                title: "Signup Error",
                description: "Please provide both email and password.",
            });
        }
    }

    const onClickLoginButton = () => {
        if (loginEmail && loginPassword) {
            // Perform login logic here
            toast({
                title:"Login Successful",
                description: "You are now logged in.",
            });

            localStorage.setItem('dashboard-loggedIn', 'true')
            navigate("/dashboard")
        } else {
            // Display an error message if email or password is missing
            toast({
                title: "Login Error",
                description: "Please provide both email and password.",
            });
        }
    }

    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Signup </TabsTrigger>
                <TabsTrigger value="password">Login </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                    <CardHeader>
                        <CardTitle>Signup</CardTitle>
                        <CardDescription>
                            Signup if you haven't
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="signup-email">Email</Label>
                            <Input
                                type="email"
                                placeholder="Email"
                                value={signupEmail}
                                onChange={(e) => setSignupEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="signup-password">Password</Label>
                            <Input
                                type="password"
                                placeholder="Password"
                                value={signupPassword}
                                onChange={(e) => setSignupPassword(e.target.value)}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-red-400" onClick={onclickSignupButton}>Signup</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>
                            Login to visit your dashboard
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="login-email">Email</Label>
                            <Input
                                type="email"
                                placeholder="Email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="login-password">Password</Label>
                            <Input
                                type="password"
                                placeholder="Password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-red-400" onClick={onClickLoginButton}>Login</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}