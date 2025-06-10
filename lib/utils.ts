import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format errors
export function formatError(error: any) {
  if(error.name === 'zodError') {
    const fieldErrors = Object.keys(error.errors).map((field) => error.errors[field].message);
    return fieldErrors.join('. ');
  } else if (error.name === 'PrismaClientKnownRequestError' && error.code === 'P2002') {
    const field = error.meta?.target ? error.meta.target[0] : 'Field';
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exist`;
  } else {
    return typeof error.message === 'string' ? error.message : JSON.stringify(error.message);
  }
}