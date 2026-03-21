// Global type declarations

declare module "*.css" {
    const content: Record<string, string>;
    export default content;
}

declare module "emailjs-com" {
    interface EmailJSResponseStatus {
        status: number;
        text: string;
    }
    export function sendForm(serviceID: string, templateID: string, form: HTMLFormElement, userID: string): Promise<EmailJSResponseStatus>;
    export function init(userID: string): void;
}
