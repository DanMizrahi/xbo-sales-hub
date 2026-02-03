/**
 * XBO Sales Hub - Supabase Authentication
 * Handles user authentication, session management, and role-based access
 */

const SUPABASE_CONFIG = {
    url: 'https://frbdzhddqbkuzwaqwvwi.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyYmR6aGRkcWJrdXp3YXF3dndpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MTYxNzEsImV4cCI6MjA4NTA5MjE3MX0.yLOrB38FQ3F_6r7wpVq2z8aVdOjSFuea9nyqP6xzkKE'
};

class XBOAuth {
    constructor() {
        this.supabaseUrl = SUPABASE_CONFIG.url;
        this.supabaseKey = SUPABASE_CONFIG.anonKey;
        this.supabase = null;
        this.currentUser = null;
        this.currentSession = null;
        this.initialized = false;
    }

    /**
     * Initialize Supabase client
     */
    async init() {
        if (this.initialized) return;

        // Check if Supabase JS is loaded
        if (typeof supabase === 'undefined') {
            console.error('Supabase JS not loaded. Include the Supabase client script.');
            return;
        }

        this.supabase = supabase.createClient(this.supabaseUrl, this.supabaseKey);
        
        // Get initial session
        const { data: { session } } = await this.supabase.auth.getSession();
        this.currentSession = session;
        this.currentUser = session?.user || null;

        // Listen for auth changes
        this.supabase.auth.onAuthStateChange((event, session) => {
            this.currentSession = session;
            this.currentUser = session?.user || null;
            
            // Dispatch custom event for UI updates
            window.dispatchEvent(new CustomEvent('authStateChange', {
                detail: { event, session, user: this.currentUser }
            }));
        });

        this.initialized = true;
    }

    /**
     * Sign in with email and password
     */
    async signIn(email, password) {
        await this.init();

        const { data, error } = await this.supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) throw error;

        this.currentUser = data.user;
        this.currentSession = data.session;

        return data;
    }

    /**
     * Sign up with email and password
     */
    async signUp(email, password, metadata = {}) {
        await this.init();

        const { data, error } = await this.supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    role: 'user',
                    ...metadata
                }
            }
        });

        if (error) throw error;

        return data;
    }

    /**
     * Sign out
     */
    async signOut() {
        await this.init();

        const { error } = await this.supabase.auth.signOut();
        if (error) throw error;

        this.currentUser = null;
        this.currentSession = null;
    }

    /**
     * Get current user
     */
    async getUser() {
        await this.init();
        
        if (!this.currentSession) {
            const { data: { session } } = await this.supabase.auth.getSession();
            this.currentSession = session;
            this.currentUser = session?.user || null;
        }

        return this.currentUser;
    }

    /**
     * Check if user is authenticated
     */
    async isAuthenticated() {
        const user = await this.getUser();
        return !!user;
    }

    /**
     * Get user role
     */
    async getUserRole() {
        const user = await this.getUser();
        return user?.user_metadata?.role || 'user';
    }

    /**
     * Check if user is admin
     */
    async isAdmin() {
        const role = await this.getUserRole();
        return role === 'admin';
    }

    /**
     * Protect page - redirect to login if not authenticated
     */
    async protectPage(requiredRole = null) {
        const isAuth = await this.isAuthenticated();
        
        if (!isAuth) {
            window.location.href = 'login.html?redirect=' + encodeURIComponent(window.location.pathname);
            return false;
        }

        if (requiredRole) {
            const role = await this.getUserRole();
            if (role !== requiredRole && role !== 'admin') {
                window.location.href = 'index.html?error=unauthorized';
                return false;
            }
        }

        return true;
    }

    /**
     * Reset password
     */
    async resetPassword(email) {
        await this.init();

        const { data, error } = await this.supabase.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin + '/reset-password.html'
        });

        if (error) throw error;

        return data;
    }

    /**
     * Update password
     */
    async updatePassword(newPassword) {
        await this.init();

        const { data, error } = await this.supabase.auth.updateUser({
            password: newPassword
        });

        if (error) throw error;

        return data;
    }

    /**
     * Update user metadata
     */
    async updateUserMetadata(metadata) {
        await this.init();

        const { data, error } = await this.supabase.auth.updateUser({
            data: metadata
        });

        if (error) throw error;

        return data;
    }

    /**
     * Sign in with magic link
     */
    async signInWithMagicLink(email) {
        await this.init();

        const { data, error } = await this.supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: window.location.origin + '/index.html'
            }
        });

        if (error) throw error;

        return data;
    }

    /**
     * Sign in with Google OAuth
     */
    async signInWithGoogle() {
        await this.init();

        const { data, error } = await this.supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin + '/index.html'
            }
        });

        if (error) throw error;

        return data;
    }
}

// Export singleton instance
const xboAuth = new XBOAuth();

// For use in browser
if (typeof window !== 'undefined') {
    window.XBOAuth = XBOAuth;
    window.xboAuth = xboAuth;
}

// For use in Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { XBOAuth, xboAuth };
}
