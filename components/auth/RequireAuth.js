import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../src/app/firebaseConfig';

const RequireAuth = (WrappedComponent) => {
    const AuthenticatedComponent = (props) => {
        const router = useRouter();

        useEffect(() => {
            // Check authentication status when component mounts
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (!user) {
                    // If user is not authenticated, redirect to login page
                    router.push('/auth/login');
                }
            });

            // Clean up subscription when component unmounts
            return () => unsubscribe();
        }, [router]); // Include router in the dependency array

        // Render wrapped component if authenticated
        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default RequireAuth;