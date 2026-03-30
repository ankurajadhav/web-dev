export type TabType = 'home' | 'bmi' | 'lifestyle' | 'mental' | 'disease' | 'experts' | 'contact';

export interface Expert {
  name: string;
  role: string;
  image: string;
  qualifications: string[];
  achievements: string[];
  celebrities: string[];
  specialization: string;
  description: string;
}
