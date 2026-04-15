
import React from 'react';

export type Page = 'home' | 'biodata' | 'film' | 'contact';

export interface NavItem {
  label: string;
  id: Page;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Program {
  title: string;
  description: string;
  icon: React.ReactNode;
}
