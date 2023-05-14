import { createContext } from 'react';
import { ResourceContextType } from '../types/Resource';

export const ResourceContext = createContext<ResourceContextType | null>(null);