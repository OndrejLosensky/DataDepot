import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../src/app/firebaseConfig';

const RequireAuth = (WrappedComponent) => {
    const AuthenticatedComponent = (props) => {
        const router = useRouter();
        const [isUserActive, setUserActive] = useState(true); // Track user activity

        useEffect(() => {
            let inactivityTimer; // Timer for tracking user inactivity

            const handleUserActivity = () => {
                setUserActive(true); // Reset user activity flag on any user interaction
                // Reset the inactivity timer
                clearTimeout(inactivityTimer);
                inactivityTimer = setTimeout(() => {
                    // Log out the user after timeout
                    setUserActive(false);
                    router.push('/auth/login');
                }, 20 * 60 * 1000); // 2 minutes in milliseconds
            };

            // Add event listeners to track user activity
            window.addEventListener('mousemove', handleUserActivity);
            window.addEventListener('keypress', handleUserActivity);

            // Check authentication status when component mounts
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (!user || !isUserActive) {
                    // If user is not authenticated or inactive, redirect to login page
                    router.push('/auth/login');
                }
            });

            // Clean up event listeners and subscription when component unmounts
            return () => {
                window.removeEventListener('mousemove', handleUserActivity);
                window.removeEventListener('keypress', handleUserActivity);
                clearTimeout(inactivityTimer); // Clear the timeout on unmount
                unsubscribe();
            };

        }, [router, isUserActive]); // Include router and isUserActive in the dependency array

        // Pass down isUserActive state as a prop to the wrapped component
        return <WrappedComponent {...props} isUserActive={isUserActive} />;
    };

    return AuthenticatedComponent;
};

export default RequireAuth;
